import React, { forwardRef } from 'react'
const classss='w-full p-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'



const Input=forwardRef( function Input({label,textarea,...props},ref) {
  return (
    <p className='flex flex-col gap-2 my-4'>
      <label className='text-sm font-bold uppercase text-stone-500'>{label}</label>
      {textarea?<textarea ref={ref} className={classss}{...props}/>:<input ref={ref} className={classss} {...props}/>}
    </p>
  )
})

export default Input;
