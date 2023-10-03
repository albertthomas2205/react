import React, { useEffect } from 'react'
import { useState } from 'react';
import './todo.css'
import Add from './Add'
import List from './List'

const Todo = () => {
  const [tasks,setTask] = useState([])
  
  const addTask = (title) =>{
    const newTask = [...tasks,{title} ]
    setTask(newTask)
  
  }
  useEffect(()=>{
    document.title = `You have ${tasks.length} pending task(s)`
  });
  const removeTask = (index) =>{
    const newTask = [...tasks]
    newTask.splice(index,1)
    setTask(newTask)
  }
  return (<>
  <div className='background' >
    <div className='outer' >
      
      <div className='header'> <h1>todo app</h1></div>
      <div> <Add addTask={addTask}/></div>
      <div>
        {tasks.map((task,index)=>(
            <List task={task} removeTask = {removeTask} index = {index} key = {index} />
        ))}
       </div>


        </div>
        </div>
        </>
  )
}

export default Todo