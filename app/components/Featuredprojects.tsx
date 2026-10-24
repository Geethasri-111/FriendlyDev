import React from 'react'
import type { project } from "~/types";
import ProjectCard from './ProjectCard';

type featuredProps = {
    projects :project[],
    count:number
}

const Featuredprojects = ({projects,count} : featuredProps) => {
    const featured = projects.filter((p) => p.featured).slice(0,count);

  return (
    <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-500">Featured Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((pro) => (                
                <ProjectCard key={pro.id} pro={pro}/>
            ))}
        </div>
    </section>
  )
}

export default Featuredprojects