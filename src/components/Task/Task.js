import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import './Task.css';

const Task = ({name, active, onCheck, onDelete, onEdit}) => {
    let classNames = [];

    if (!active) {
        classNames.push('nonActive');
    }

    return (
        <Paper 
            sx={{
                p: 3, 
                display: 'flex'
            }} 
            elevation={3} 
            className='taskWrapper'
        >
            <FormControlLabel
                className={classNames.join(' ')}
                label={name}
                control={
                    <Checkbox  
                        name={name} 
                        checked={!active}
                        onChange={onCheck} 
                    />
                }
            />
            <Stack 
                sx={{ml: 'auto', alignItems: 'flex-start'}} 
                direction='row' 
                spacing={1}>
                <Button 
                    variant='outlined'
                    color='error'
                    size='small'
                    className='deleteBtn'
                    onClick={onDelete}
                >
                    X
                </Button>
                <Button
                    variant='outlined'
                    size='small'
                    onClick={onEdit} 
                >
                    edit
                </Button>
            </Stack>
        </Paper>
    ); 
};

export default Task;