import { useEffect, useState } from "react";

import './AddTask.css';

const initialState = {
    name: ''
};

const AddTask = ({onSubmit, taskToEdit}) => {
    const [task, setTask] = useState(initialState);

    useEffect(() => {
        setTask(taskToEdit);
    }, [taskToEdit]);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setTask({
            ...task,
            [name]: value
        });
    };

    const clearForm = () => {
        setTask(initialState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(task);
        clearForm();
    };

    return (
        <div className="addTask">
            <form onSubmit={handleSubmit}>
                <textarea 
                    placeholder="Enter a task"
                    name="name" 
                    rows='5'
                    value={task.name} 
                    onChange={handleChange} 
                />
                <button 
                    disabled={!task.name}
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default AddTask;