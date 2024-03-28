// import React from 'react'
import Tag from './Tag';
import './TaskForm.css';
import {useState} from 'react'
const TaskForm = ({setTasks}) => {
    const [taskdata , setTaskData] = useState({task:'',status:'To do',tags:[]})
   
    const checkTag = (tag) => {
        return taskdata.tags.some(item => item===tag)
    }
    const handleChange = e => {
        const {name , value} = e.target;
        setTaskData(prev=>{
            return {...prev,[name]:value}
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        setTasks(prev => {return [...prev , taskdata]})
        setTaskData({task:'',status:'todo',tags:[]})
    }

    const selectTag = (tag)=> {
        if(taskdata.tags.some(item => item === tag) ) {
            const filterTags = taskdata.tags.filter(item => item !== tag)
            setTaskData(prev => { return {...prev, tags:filterTags}})
        } else {setTaskData(prev => {return {...prev,tags:[...prev.tags,tag]}})}
    }
    return (
    <header className='app_header'>
        <form action="" onSubmit={handleSubmit}>
        <input 
            value={taskdata.task}
            type="text"
            name='task'
            className='task_input'
            placeholder='Enter your task'
            onChange={handleChange}/>
            <div className='task_form_bottom_line'> 
                <div>
                    <Tag tagName='HTML' selectTag={selectTag} selected={checkTag('HTML')}/>
                    <Tag tagName='CSS' selectTag={selectTag} selected={checkTag('CSS')}/>
                    <Tag tagName='JavaScript' selectTag={selectTag} selected={checkTag('JavaScript')}/>
                    <Tag tagName='React' selectTag={selectTag} selected={checkTag('React')}/>
                </div>
                <div>
                    <select value={taskdata.status} name='status' className="task_status" onChange={handleChange} >
                        <option value="todo">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                    <button type='submit' className='task_submit'>Add Task</button>
                </div>
            </div>
        </form>
    </header>
    )
}

export default TaskForm