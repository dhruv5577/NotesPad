import { useState } from 'react';
import BlankProject from './Components/BlankProject';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import SelectedProject from './Components/SelectedProject';

function App() {
  const [project, setProject] = useState({
    selectedproject: undefined,
    projects: [],
    tasks:[]
  });

  function handleAddTask(text){
    setProject((prev) => {
      const textid=Math.random();
      const newTask = {
        text:text,
        projectId:prev.selectedproject,
        id: textid
      };

      return {
        ...prev,
        tasks: [...prev.tasks,newTask],
      };
    });
  }

  function handleDeleteTask(id){
    setProject((prev) => ({
      ...prev,
      tasks:prev.tasks.filter((task)=>task.id!==id)
    }));
  }


  function handleaddproject() {
    setProject((prev) => ({
      ...prev,
      selectedproject: null,
    }));
  }

  function handlecancelproject() {
    setProject((prev) => ({
      ...prev,
      selectedproject: undefined,
    }));
  }

  function handleselectproject(id) {
    setProject((prev) => ({
      ...prev,
      selectedproject: id,
    }));
  }

  function addproject(projectdata) {
    setProject((prev) => {
      const newProject = {
        ...projectdata,
        id: Math.random(),
      };

      return {
        ...prev,
        selectedproject: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function handledelete(){
    setProject((prev) => ({
      ...prev,
      selectedproject: undefined,
      projects:prev.projects.filter((proj)=>proj.id!==prev.selectedproject)
    }));
  }

  const selectedProject = project.projects.find(
    (proj) => proj.id === project.selectedproject
  );

  let page = <SelectedProject 
  project={selectedProject}
  ondelete={handledelete}
  onAddTask={handleAddTask}
  onDeletetask={handleDeleteTask}
  tasks={project.tasks}
  />;

  if (project.selectedproject === null) {
    page = <Dashboard onAdd={addproject} onCancel={handlecancelproject} />;
  } else if (project.selectedproject === undefined) {
    page = <BlankProject onstartadd={handleaddproject} />;
  }

  return (
    <main className='my-8 h-screen flex gap-10'>
      <Sidebar
        onstartadd={handleaddproject}
        projects={project.projects}
        onselect={handleselectproject}
        projectid={project.selectedproject}
      />
      {page}
    </main>
  );
}

export default App;
