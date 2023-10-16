
import React, { useState } from 'react'
import './todo.css'

const Todolist = () => {

    
const [todoo,setTodoo] = useState('')
const [todos,setTodos] = useState([])
const [editid,setEditid] = useState(0)



const addTodo = () =>{
  const trimmedTodoo = todoo.trim(); // Remove leading and trailing spaces

  if (!trimmedTodoo) {
    // If 'trimmedTodoo' is empty (contains only spaces), do not add it to 'todos'.
    return;
  }
  if (todos.some((todo) => todo.task === trimmedTodoo)) {
    // If it exists, return early and do not add it again.
    setTodoo('')
    return;
  }


const newTask =([...todos,{task:todoo ,id:Date.now(),status:false}])
console.log(newTask.task)
setTodos(newTask)
setTodoo('')
if (editid){
  const edit = todos.find((todoo)=>todoo.id === editid)
  const updatetodo = todos.map((to)=>to.id ===edit.id
  ?(to = {id:to.id,task:todoo,})
  : (to = {id :to.id,task:to.task})
  )
  setTodos(updatetodo)
  setEditid(0)
  setTodoo('')


}


}
const changeStatus = (id) =>{

let newTask = todos.map((to)=>{
  if(to.id === id){
       return {...to, status:!to.status}
  }
  return to
}

)
setTodos(newTask)
 
}

const deleteTask = (id)=>{
  setTodos(todos.filter((to)=>to.id !==id))
 
}

const editTodo = (id)=>{
  const newTask = todos.find((to)=>to.id === id)
  setTodoo(newTask.task)
  setEditid(newTask.id)
}
  return (
    <div>
   <div className='gradient-custom'>
      <div><h1>ToDO App</h1></div>
     
  
     <div className='body'>
     
     <div>
     
           
       
            {/* Content */}
            <div className="inputouter">
              <input
                className="input"
                value = {todoo}
                onChange={(event)=>setTodoo(event.target.value)}
               
                
                placeholder=" Add new tasks hear..."
              />{" "}
              <button type="button" className="btn"  onClick={addTodo}>
                {editid?'EDIT':'ADD'}
        
              </button>
            </div>
        
    </div>
     
   
     
  
  
     <div>
     {todos.map((ta)=>(
     <div className='list'>
    
<div className='innerlist'>
    

  
    <div className='check' onClick={()=>changeStatus(ta.id)}><input class="form-check-input me-2" type="checkbox" value="" aria-label="..." /></div>


   
          <div className='text'>
           

              <h4 style={ta.status?{color:"lightgreen"}:{color:"white"}} >{ta.task}</h4>
            


        
          
          </div>
        
          <div className="editt" ><button onClick={()=>(editTodo(ta.id))} >edit</button></div>
          <div className='del'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16" onClick={()=>(deleteTask(ta.id))}>
                      <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                    </svg>

          </div>
     
          
                
    </div>

     
</div>     
      ))}
    

  
  
     
     </div>
  
     </div>
  
    </div>
    </div>
  )
}

export default Todolist