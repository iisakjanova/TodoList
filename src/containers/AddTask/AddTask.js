import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import './AddTask.css';

const initialState = {
    name: ''
};

const AddTask = ({onSubmit, id}) => {
    const [task, setTask] = useState(initialState);
    const taskToEdit = useSelector(state => state.tasks[id]);

    useEffect(() => {
        if (taskToEdit) {
            setTask(taskToEdit);
        } else {
            setTask(initialState);
        }
    }, [id]);

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