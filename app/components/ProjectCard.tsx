import React from 'react'
import { Link } from 'react-router'
import type { project } from '~/types'


const ProjectCard = ({pro} : {pro:project}) => {
    const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
  return (
    <Link to={`/projects/${pro.id}`} className='block transform transition duration-300 hover:scale-[1.02]'>
     <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
                <img src={pro.image} alt={pro.title} className="w-full h-40 object-cover"/>
                <div className="p-5">
                    <h3 className="text-3xl font-semibold text-blue-400 mb-2">
                        {pro.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-2">{pro.description}</p>
                    <div className="flex justify-between items-center text-gray-400 text-sm">
                        <span>{pro.category}</span>
                        <span>{formatter.format(new Date(pro.date))}</span>
                    </div>
                </div>
     </div>
    </Link>
  )
}

export default ProjectCard