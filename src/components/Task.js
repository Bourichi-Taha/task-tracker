import {FaTimes} from 'react-icons/fa'


const Task = ({task , onDelete , togReminder}) => {
    return(
        <div className={ task.reminder ? "task-content reminder" : "task-content " } onDoubleClick={() => togReminder(task.id)}>
            <div className='task'>
                <h3>{task.text}</h3>
                <p>{task.date}</p>
            </div>
            <FaTimes className='times-icon' onClick={() => onDelete(task.id)}></FaTimes>
        </div>
    )
}

export default Task