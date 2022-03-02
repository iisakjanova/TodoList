import { useState } from "react";
import { nanoid } from "nanoid";

import AddTask from "../AddTask/AddTask";
import Tasks from "../Tasks/Tasks";
import './TodoList.css';

const TodoList = () => {
    const [tasks, setTasks] = useState({});
    const [taskToEdit, setTaskToEdit] = useState({});

    const onCheck = (task) => {
        setTasks(
            {
                ...tasks,
                [task.id]: {
                    id: task.id,
                    name: task.name,
                    active: !task.active
                }
            }
        );
    };

    const handleDelete = (id) => {
        const {[id]: remove, ...rest} = tasks;
        setTasks(rest);
    };

    const handleEdit = (id) => {
        const task = tasks[id];
        setTaskToEdit(task);
    };

    const handleSubmit = (task) => {
        let id;

        if (!task.id) {
            id = nanoid();
        } else {
            id = task.id;
        }

        setTasks({
            ...tasks,
            [id]: {
                id,
                name: task.name,
                active: task.active ?? true
            }
        });
    };

    return (
        <div className="todoList">
            <h2 className="title">Todo List</h2>
            {Object.values(tasks).length > 0 ? 
                <Tasks 
                    tasks={tasks} 
                    onCheck={onCheck}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                /> :
                <p>No tasks yet</p>
            }
            <AddTask 
                onSubmit={handleSubmit} 
                taskToEdit={taskToEdit}
            />
        </div>
    );
};

export default TodoList;