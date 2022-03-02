import { useState } from 'react';

import Task from '../../components/Task/Task';
import './Tasks.css';

const Tasks = ({tasks, onCheck, onDelete, onEdit}) => {
    return (
        <ul className='tasks'>
            {Object.values(tasks).map(task => (
                <Task
                    key={task.id}
                    name={task.name}
                    active={task.active}
                    onCheck={(e) => onCheck(task)}
                    onDelete={() => onDelete(task.id)}
                    onEdit={() => {onEdit(task.id)}}
                />
            ))}
        </ul>
    );
};

export default Tasks;