import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import { useState } from "react";
import AddForm from "./components/AddForm";
import SocialLinks from "./components/SocialLinks";
function App() {
  

  const [currentClasse,setClass] = useState("passive");
  const [tasks , setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appointment',
      date: 'Feb 5th at 2:30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Doctors appointment',
      date: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Doctors appointment',
      date: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ])

  const toggleAdd = (classToggles) =>{
    if (classToggles==='passive') {
        setClass("")
        const maxHeightToggel = document.querySelector(".App .form form.passive")
        maxHeightToggel.style.maxHeight = maxHeightToggel.scrollHeight + 100 + 'px'
        maxHeightToggel.style.opacity = 1
    } else  {
        setClass("passive")
        const maxHeightToggel = document.querySelector(".App .form form.passive")
        maxHeightToggel.style.maxHeight = 0 + 'px'
        maxHeightToggel.style.opacity = 0
    }
    console.log(classToggles)

  }

  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  }
  
  const addTask = (newTask) => {
    const id = tasks.length + 1
    const theTask = {id , ...newTask}
    setTasks([...tasks,theTask])
  }

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="App">
      <Header btnClass={currentClasse}  toggleAdd={toggleAdd} />
      <AddForm newTask={addTask} />
      <Tasks togReminder={toggleReminder} tasks={tasks} onDelete={deleteTask}/>
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
