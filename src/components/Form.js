import Button from "./Button"
import { FaCheck } from "react-icons/fa"
import { useState } from "react"

const Form = ({newTask}) => {

    const newCheck = document.querySelector('.check-icon')


    const onSubmit = (e) => {
        e.preventDefault()
        if(!newTaskContent.text || !newTaskContent.date){
            alert('please fill all the fields')
        }else{
            console.log(newTaskContent)
            newTask(newTaskContent)
            setNewTask({
                text : '',
                date : '',
                reminder : false,
            })
            newCheck.classList.remove('active')
        }
    }
    const [newTaskContent,setNewTask] = useState({
        text : '',
        date : '',
        reminder : false,
    })
    const isChecked = () => {
        newCheck.classList.toggle('active')
        if (newCheck.classList.contains('active')) {
            setNewTask({...newTaskContent,reminder: true})
        }else{
            setNewTask({...newTaskContent,reminder: false})
        }
    }
    return (
        <form className="passive" onSubmit={onSubmit}>
            <label htmlFor='task'>Task</label>
            <input type='text' placeholder='Add Task' id='task' value={newTaskContent.text} onChange={ (e) => setNewTask({...newTaskContent,text: e.target.value})}/>
            <label htmlFor='date'>Day & Time</label>
            <input type='datetime'  id='date' value={newTaskContent.date} onChange={ (e) => setNewTask({...newTaskContent,date: e.target.value})}/>
            <div className="reminder">
                <label htmlFor='reminder'>Set Reminder</label>
                <input type='checkbox' id='reminder' checked={newTaskContent.reminder} value={newTaskContent.reminder} onChange={ (e ) => setNewTask({...newTaskContent,reminder: e.currentTarget.checked})}/>
                <span className="check" onClick={() => isChecked()}><FaCheck className="check-icon" /></span>
            </div>
            <Button  />
        </form>
    )
}

export default Form