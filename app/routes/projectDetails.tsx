import type { project } from '~/types'
import type { Route } from './+types/projectDetails';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';


export async function clientLoader({params}:Route.ClientLoaderArgs):Promise<project>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/${params.id}`); 
    if(!res.ok) throw new Error ('failed search');
    const detail:project = await res.json();
    return detail;

}

export function HydrateFallback(){
    return <>Loading...</>
}

const projectDetails = ({loaderData,}:Route.ComponentProps) => {
    const detail = loaderData;
     const formatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        });
  return (
    <>
    <Link to="/projects" className='text-blue-400 flex items-center mb-6 transition '>
        <FaArrowLeft className='mr-2'/>Back To Projects
    </Link>
    <div className="grid gap-8 items-start md:grid-cols-2">
        <img src={detail.image} alt={detail.title} className='rounded-lg shadow-md w-full'/>
        <div>
            <h1 className="text-3xl font-bold mb-4 text-blue-400">{detail.title}</h1>
            <p className='text-sm mb-4 text-gray-300'>{formatter.format(new Date(detail.date))} . {detail.category}</p>
            <p className='text-sm mb-6 text-gray-200'>{detail.description}</p>
            <a href={detail.url} target="_blank" className='inline-block text-white bg-blue-600
             hover:bg-blue-600 px-6 py-2 rounded transition'>View Project</a>
        </div>
    </div>
    </>
  )
}

export default projectDetails