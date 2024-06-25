import React from 'react'
import Button from './Button'

export default function Sidebar({onstartadd,projects,onselect,projectid}) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-800 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
      <div>
        <Button onClick={onstartadd}>+ Add New Task</Button>
      </div>
      <ul className='mt-10'>
        {projects.map((project) => {
          let css = 'w-full text-left px-2 py-2 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 '

          if (project.id === projectid) {
            css += ' bg-stone-800 text-stone-200'
          } else {
            css += ' text-stone-400'
          }

          return (
            <li key={project.id}>
              <button onClick={() => onselect(project.id)} className={css}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  )
}
