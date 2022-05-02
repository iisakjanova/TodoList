import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

import { addTask, updateTask } from "../../store/actions/tasksActions";

const initialState = {
    name: ''
};

const EditTask = () => {
    const params = useParams();
    const id = params.id;

    const [task, setTask] = useState(initialState);
    const taskToEdit = useSelector(state => state.tasks[id]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (id) {
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

        const taskData = {
            id: task.id ?? '',
            name: task.name,
            active: task.active ?? true
        };

        if (!params.id) {
            dispatch(addTask(taskData));
        } else {
            dispatch(updateTask(taskData));
        } 
        
        clearForm();
        navigate('/');
    };

    return (
        <>
            <Typography 
                sx={{
                    mb: 3, 
                    textAlign: 'center'
                }}  
                variant="h4"
            >
                Add task
            </Typography>
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
        </>
    );
};

export default EditTask;