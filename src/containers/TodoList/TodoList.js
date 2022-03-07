import { useState } from "react";
import { nanoid } from "nanoid";

import AddTask from "../AddTask/AddTask";
import Tasks from "../Tasks/Tasks";
import './TodoList.css';
import { useDispatch, useSelector } from "react-redux";
import { addTask, changeTaskStatus, deleteTask, editTask } from "../../store/actions/tasksActions";

const TodoList = () => {
    const [id, setId] = useState(null);

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    const onCheck = (id) => {
        dispatch(changeTaskStatus(id));
    };

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    const handleEdit = (id) => {
        setId(id);
    };

    const handleSubmit = (task) => {
        const taskData = {
            id: task.id ?? nanoid(),
            name: task.name,
            active: task.active ?? true
        };
        
        if (!task.id) {
            dispatch(addTask(taskData));
        } else {
            dispatch(editTask(taskData));
        } 
    };

    return (
        <div className="todoList">
            <h2 className="title">Todo List</h2>
            {Object.keys(tasks).length > 0 ? 
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
                id={id}
            />
        </div>
    );
};

export default TodoList;