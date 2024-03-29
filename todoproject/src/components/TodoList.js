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
   
      
    const newTask = [...tasks,{ title :value, status: false ,key:Date.now()}] ;
    
    // Add the status field with a default value
    setTask(newTask);

    

  }

  
  const editTask = (key) =>{
    const editTodo = tasks.filter((todo )=>todo.key === key)
    console.log(editTodo.title)
   
    setTask(editTodo.title)


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

    <List task={task}  index={index} removeTask={removeTask} changeStatus={changeStatus} editTask = {editTask} />

   ))


   }
   
   </div>

   </div>

  </div>
 
  </Container>
  )
}

export default TodoList