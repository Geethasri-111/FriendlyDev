import React from 'react'
import { Link } from 'react-router'

const notFound = () => {
  return (
    <div className='flex flex-col items-center justify-center px-6 min-h-[70vh]'>
        <h1 className="text-6xl font-bold text-blue-400 mb-2">
            404 
        </h1>
        <h2 className="text-2xl font-bold text-gray-400 mb-2">
            page not found
        </h2>
        <Link to="/" className='px-6 py-2 text-white font-semibold bg-blue-400'>Go home</Link>
    </div>
  )
}

export default notFound