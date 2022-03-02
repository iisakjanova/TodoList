import './Task.css';

const Task = ({name, active, onCheck, onDelete, onEdit}) => {
    let classNames = ['task'];

    if (!active) {
        classNames.push('nonActive');
    }

    return (
        <li className='taskWrapper'>
            <input
                type="checkbox" 
                name={name} 
                checked={!active}
                onChange={onCheck} />
            <label className={classNames.join(' ')}>{name}</label>
            <div className='btns'>
                <button 
                    className='deleteBtn'
                    onClick={onDelete}
                >
                    X
                </button>
                <button
                    onClick={onEdit} 
                >
                    edit
                </button>
            </div>
        </li>
    ); 
};

export default Task;