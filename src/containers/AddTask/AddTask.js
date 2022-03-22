import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    }, []);

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
        <Paper 
            sx={{p: 3}}
            elevation={10}
            className="addTask" 
        >
            <Box 
                component="form" 
                onSubmit={handleSubmit} 
                sx={{
                    '& .MuiInputBase-root': { width: '100%' },
                }}
            >
                <TextField 
                    sx={{
                        display: 'block', 
                        mb: 2, 
                        width: '100%'
                    }}
                    label="Enter a task"
                    name="name" 
                    multiline
                    minRows={4}
                    value={task.name} 
                    onChange={handleChange} 
                />
                <Button 
                    variant="contained" 
                    type="submit"
                    disabled={!task.name}
                >
                    Save
                </Button>
            </Box>
        </Paper>
    );
};

export default AddTask;