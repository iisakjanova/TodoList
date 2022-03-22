import Stack from '@mui/material/Stack';

import Task from '../../components/Task/Task';

const Tasks = ({tasks, onCheck, onDelete, onEdit}) => {
    return (
        <Stack 
            direction="column" 
            spacing={2}
        >
            {Object.values(tasks).map(task => (
                <Task
                    key={task.id}
                    name={task.name}
                    active={task.active}
                    onCheck={(e) => onCheck(task.id, task.active)}
                    onDelete={() => onDelete(task.id)}
                    onEdit={() => {onEdit(task.id)}}
                />
            ))}
        </Stack>
    );
};

export default Tasks;