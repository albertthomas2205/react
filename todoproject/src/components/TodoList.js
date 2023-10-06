import React, { useState } from 'react'
import './Todo.css'
import Add from './Add'

import List from './List'
import { Container } from 'react-bootstrap';


const TodoList = () => {

  const [tasks, setTask] = useState([])

  const [selectedButton, setSelectbutton] = useState('button1')
  
  const handleButtonClick = (btn_name)=>{
    setSelectbutton(btn_name)
  }
  const [display,setDisplay] = useState('haiii')

  const filterTasks = (selectedButton) =>{
    if (selectedButton==='button1'){
      return tasks
    }
    else if (selectedButton==='button2'){
      return tasks.filter((task)=>!task.status)
    }
    else{
      return tasks.filter((task)=>task.status)
    }
  }

  const addTask = (value) => {
    const isTaskExist = tasks.some(task => task.title ===value);
    if (isTaskExist){
      alert(' Task is already added to the ToDos...')

    }else{
      
    const newTask = [...tasks,{ title :value, status: false }] ;
    
    // Add the status field with a default value
    setTask(newTask);

    }

  }



  const removeTask =(index)=>{
    const newTask = [...tasks]
    newTask.splice(index,1)
    setTask(newTask)
  }

  const changeStatus = (index) => {
    const newTask = [...tasks];
    newTask[index].status = !newTask[index].status; // Toggle the status
    setTask(newTask); // Use setTasks to update the state
  };
 




  return (
    <Container>
    

  <div className='gradient-custom'>
    <div><h1>ToDO App</h1></div>
   

   <div className='body'>
   
   <Add addTask={addTask}/>
   
  <div className='status'>
   <button className='bt1'  style={{
          backgroundColor: selectedButton === 'button1' ? 'lightgreen' : null,
        }}
        onClick={() => handleButtonClick('button1')}>ALL</button>

   <button className='bt2'   style={{
          backgroundColor: selectedButton === 'button2' ? 'lightgreen' : null,
        }}
        onClick={() => handleButtonClick('button2')}>ACTIVE </button>

   <button className='bt3'   style={{
          backgroundColor: selectedButton === 'button3' ? 'lightgreen' : null,
        }}
        onClick={() => handleButtonClick('button3')}>COMPLETED</button>

</div>
   


   <div>
    
   {filterTasks(selectedButton).map((task,index)=>(

    <List task={task}  index={index} removeTask={removeTask} changeStatus={changeStatus} />

   ))


   }
   
   </div>

   </div>

  </div>
 
  </Container>
  )
}

export default TodoList