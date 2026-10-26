import type { Route } from './+types/Projects.js';
import type { project } from "~/types";
import ProjectCard from '../components/ProjectCard'
import { useState } from 'react';
import Pagination from '~/components/Pagination.js';
import { AnimatePresence ,motion} from "motion/react"

export async function loader({ request }: Route.LoaderArgs):Promise<{project:project[]}> {
 const res = await fetch(`${import.meta.env.VITE_API_URL}`);
  const data = await res.json();
  console.log(data)
  return {project : data};
}

const Projects= ({ loaderData,}: Route.ComponentProps) => {
    const [selectedCategory,setSelectedCategory] = useState('Fullstack');
   const [currentPage,setCurrentPage] = useState(1);
   const itemsPerPage = 10;
  const { project } = loaderData;
    //different category
  const Categories = ['All' ,... new Set(project.map((item)=>item.category))];
 //Filter project category

const filteredProjects = selectedCategory === 'All' ? project :
project.filter((item) => selectedCategory === item.category)
  //calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentPageProject = filteredProjects.slice(firstIndex,lastIndex);



  return (
    <>
    <div className="flex mb-4 flex-wrap gap-2">
      {Categories.map((category)=>(
        <button key={category} onClick={()=>{setSelectedCategory(category);setCurrentPage(1)}}
        className={`px-3 py-1 rounded 
          cursor-pointer text-sm ${selectedCategory === category ? 'bg-blue-600 text-white' :'bg-gray-700 text-gray-300'}`}>{category} </button>
      ))}
    </div>
    <AnimatePresence mode='wait'>
      <motion.div layout className="grid gap-6 sm:grid-cols-2">
          {currentPageProject.map((pro)=> (
              <motion.div layout key={pro.id}><ProjectCard pro={pro} /></motion.div>
          ))}
          
      </motion.div>
    </AnimatePresence>
    <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}/>
    </>
  );
}

export default Projects