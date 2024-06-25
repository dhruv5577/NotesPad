import React, { useState } from 'react'



export default function TaskButton({onAdd}) {


  const[enteredValue,setEnteredValue]=useState('');

  function handlechange(e){
    setEnteredValue(e.target.value);
   }

  function handleclick(){
    if(enteredValue.trim()===''){
      return;
    }
    onAdd(enteredValue)
    setEnteredValue('')
  }

  return (
    <div className='flex items-center gap-4'>
      <input type='text' className='w-64 px-3 py-2 ronded-sm bg-stone-200' onChange={handlechange} value={enteredValue}/>
        <button className='text-stone-700 hover:text-stone-950' onClick={handleclick}>Add task</button>
    </div>
  )
}
