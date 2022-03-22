import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import AddTask from "../AddTask/AddTask";
import Tasks from "../Tasks/Tasks";
import Preloader from "../../components/UI/Preloader/Preloader";
import { 
    addTask, 
    changeTaskStatus, 
    deleteTask, 
    updateTask, 
    getTasks 
} from "../../store/actions/tasksActions";

import './TodoList.css';

const TodoList = () => {
    const [id, setId] = useState(null);

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const fetchLoading = useSelector(state => state.fetchLoading);
    const addTaskLoading = useSelector(state => state.addTaskLoading);
    const updateLoading = useSelector(state => state.updateLoading);
    const deleteLoading = useSelector(state => state.deleteLoading);
    const error = useSelector(state => state.error);

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
        <Box className="todoList">
            <Preloader 
                loading={fetchLoading || addTaskLoading || updateLoading || deleteLoading}
            />
            {error ? 
                <Alert severity="error">
                    {`${error.status} ${error.data.message || error.statusText}`}
                </Alert>
                : null}
            <Typography 
                sx={{
                    mb: 3, 
                    textAlign: 'center'
                }} 
                variant='h4' 
            >
                Todo List
            </Typography>
            <Stack 
                direction="column" 
                spacing={2}
            >
                {Object.keys(tasks).length > 0 ? 
                    <Tasks 
                        tasks={tasks} 
                        onCheck={onCheck}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    /> :
                    <Typography variant="body1">No tasks yet</Typography>
                }
                <AddTask 
                    key={id}
                    onSubmit={handleSubmit} 
                    id={id}
                />
            </Stack>
        </Box>
    );
};

export default TodoList;