import React from 'react'
import { Link } from 'react-router'

type HeroProps ={
  name?: string,
  text?:string
}

const Hero:React.FC<HeroProps> = ({name = '[NAME]',text ='Friendly website for development to help get knowledge'}) => {
  return (
    <header className="text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300">
        <h2 className="text-4xl text-white font-bold">
            Hi,welcome to friendlydev by {name}
        </h2>
        <p className="text-sm max-w-2xl mx-auto mb-6 mt-3">{text} </p>
        <div className="flex justify-center gap-4">
            <Link to="/projects" className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>Projects</Link>
             <Link to="/contact" className='text-blue-400 px-6 py-2 rounded hover:bg-blue-700 transition hover:text-white
             border border-blue-500'>Contact</Link>
        </div>
    </header>
  )
}

export default Hero