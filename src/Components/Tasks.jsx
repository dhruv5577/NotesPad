import React, { useState } from 'react'
import TaskButton from './TaskButton'

export default function Tasks({tasks,onAdd,onDelete}) {

  

  return (
    <section>
      <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
      <TaskButton onAdd={onAdd}/>
      {tasks.length===0 && (<p className='text-stone-800 my-6' >The project does not have any tasks yet.</p>)}
      {tasks.length>0&& 
      <ul className='p-4 mt-10 rounded-md bg-stone-200'>
        {tasks.map((task)=>
        <li key={task.id} className='flex justify-between my-4'>
          <span>{task.text}</span>
          <button className='text-stone-800 hover:text-orange-600' onClick={()=>onDelete(task.id)}>Clear</button>
        </li>)}
       </ul>}
      
    </section>
  )
}
