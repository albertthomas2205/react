import { AiTwotoneEdit } from 'react-icons/ai';
import React from 'react';



const List = ({task,index,removeTask,changeStatus,editTask}) => {
  return (
    <>

<div className='list'>

<div className='innerlist'>
    <div className='check'><input onClick={()=>{changeStatus(index)}} class="form-check-input me-2" type="checkbox" value="" aria-label="..." /></div>


    
          <div className='text'>
           

              <h4 style={ task.status?{color:"lightgreen"}:{color:'white'}}>{task.title} {task.key}</h4>

        
          
          </div>
          <div className="editt"><button onClick={()=>{editTask(task.key)}}><AiTwotoneEdit/></button></div>
          <div className='del'><svg onClick={()=>{removeTask(index)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                      <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                    </svg>

          </div>

           
                
    </div>
     
</div>     


    </>
  )
}

export default List