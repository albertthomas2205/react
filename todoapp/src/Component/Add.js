import React, { useState } from 'react'

const Add = ({addTask}) => {
      const [value,setValue] = useState("");
      const additem = ()=>{
        addTask(value)
        setValue("")
      }
    
  return (
    <div>
      <div className='input-container'>
        <input  className='input' type ="text" value ={value} placeholder='Add task..' onChange={(e)=>{setValue(e.target.value)}}></input>
        <button type='button' className='btn' onClick={additem}>Add</button>
      </div>
    </div>
  )
}

export default Add