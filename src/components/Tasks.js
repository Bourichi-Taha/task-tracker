import Task from "./Task"

const Tasks = ({tasks , onDelete , togReminder}) => {
    return (
        <>
            <div className="tasks">
                {tasks.map(task => (
                    <Task togReminder={togReminder} task={task} onDelete={onDelete} key={task.id}/>
                ))}
            </div>
        </>
    )
} 

export default Tasks