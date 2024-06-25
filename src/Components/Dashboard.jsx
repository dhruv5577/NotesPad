import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

export default function Dashboard({onAdd,oncancel}) {
  const modal=useRef();
  const title=useRef();
  const description=useRef();
  const due=useRef();

  function handlesave(){
    const enteredtitle=title.current.value;
    const entereddescription=description.current.value;
    const entereddue=due.current.value;

    if(enteredtitle.trim()===''|| entereddescription.trim()===''|| entereddue.trim()===''){
      //modal
      modal.current.open();
      return;
    }

    onAdd({
      title:enteredtitle,
      description:entereddescription,
      due:entereddue

    })

  }

  return (
    <>
    <Modal ref={modal}>
      <h2 className='text-xl font-bold text-stone-800 my-6 '>Invalid Input...</h2>
      <p className='text-stone-700 mb-6'>Provide a valid value in the input Feild.</p>
    </Modal>
    <div className='w-[35rem] mt-12'> 
        <menu className='flex items-center justify-end gap-6 my-5 '>
          <li><button onClick={handlesave} className='px-6 py-2  rounded-md bg-stone-800 hover:bg-stone-950 text-stone-50'>Save</button></li>
          <li><button onClick={oncancel} className=' text-stone-800 hover:text-stone-950 px-4 py-2 '>Cancel</button></li>
        </menu>
        <div>
          <Input type='text' ref={title} label="Title"/>
          <Input ref={description} label="Description" textarea={true}/>
          <Input type='date' ref={due} label="Due"/>
        </div>
    </div>
    </>
  )
}
