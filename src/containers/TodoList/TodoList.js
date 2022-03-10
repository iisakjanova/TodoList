import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddTask from "../AddTask/AddTask";
import Tasks from "../Tasks/Tasks";
import './TodoList.css';
import { addTask, changeTaskStatus, deleteTask, updateTask, getTasks } from "../../store/actions/tasksActions";

const TodoList = () => {
    const [id, setId] = useState(null);

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    const onCheck = (id, status) => {
        dispatch(changeTaskStatus({id, active: !status}));
    };

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    const handleEdit = (id) => {
        setId(id);
    };

    const handleSubmit = (task) => {
        const taskData = {
            id: task.id ?? '',
            name: task.name,
            active: task.active ?? true
        };
        
        if (!task.id) {
            dispatch(addTask(taskData));
        } else {
            dispatch(updateTask(taskData));
        } 

        setId('');
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
                key={id}
                onSubmit={handleSubmit} 
                id={id}
            />
        </div>
    );
};

export default TodoList;