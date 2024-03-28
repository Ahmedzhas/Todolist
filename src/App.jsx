import './App.css'
import {useEffect, useState} from 'react'
import TaskColumn from './Components/TaskColumn'
import TaskForm from './Components/TaskForm'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'
const oldTasks = localStorage.getItem('olddata')

const App = () => {
  const [tasks , setTasks] = useState(JSON.parse(oldTasks) || []);
  
  useEffect(()=>{
    localStorage.setItem('olddata',JSON.stringify(tasks))
  },[tasks])
  const handleDelete= (taskindex)=>{
    const filteredTasks = tasks.filter((task,index)=> index !== taskindex)
    setTasks(filteredTasks)
}
  return (
    <div className="app">
      <TaskForm setTasks={setTasks}/>
      <main className="app_main">
        <TaskColumn title='To do'icon={todoIcon} tasks={tasks} status = 'todo' handleDelete={handleDelete}/>
        <TaskColumn title='Doing'icon={doingIcon}tasks={tasks} status = 'doing'handleDelete={handleDelete}/>
        <TaskColumn title='Done' icon={doneIcon} tasks={tasks} status = 'done' handleDelete={handleDelete}/>

      </main>
    </div>
  )
}

export default App


