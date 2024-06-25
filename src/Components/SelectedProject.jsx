import React from 'react';
import Tasks from './Tasks';

export default function SelectedProject({ project ,ondelete,onAddTask,onDeletetask,tasks}) {
  if (!project) {
    return <div className='w-[35rem] mt-20 '>Project not found</div>;
  }

  const formatdate = project.due
    ? new Date(project.due).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : 'No due date';

  return (
    <div className='w-[35rem] mt-20 '>
      <header className='pb-4 mb-4 border-b-2 border-stone-300 '>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-stone-600 mb-4'>{project.title}</h1>
          <button className='text-stone-600 hover:text-stone-950' onClick={ondelete}>delete</button>
        </div>
        <p className='mb-4 text-stone-400'>{formatdate}</p>
        <p className='text-stone-600 whitespace-pre-wrap'>{project.description}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeletetask} tasks={tasks}/>
    </div>
  );
}
