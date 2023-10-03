import React from 'react'

const List = ({task,index,removeTask}) => {
  return (
  
    <>
    <div className='list'>{task.title} 
    <button onClick={()=>{removeTask(index)}} type='button' className='delete'>Delete</button></div>

    </>
   
  )
}

export default List