import image from '../assets/no-projects.png'
import Button from './Button'

export default function BlankProject({onstartadd}) {
  return (
    <div className='mt-24 text-center w-2/3 '>
      <img src={image} alt='Emthy task' className='w-14 h-14 object-contain mx-auto'></img>
      <h2 className='text-xl font-bold text-stone-500 my-6 '>No Task Is Selected</h2>
      <p className='text-stone-400 mb-6'>Select a Task or get started with a new one</p>
      <p className='mt-8'>
        <Button onClick={onstartadd}>Create New Task</Button>
      </p>
    </div>
  )
}
