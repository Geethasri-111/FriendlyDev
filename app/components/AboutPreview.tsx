import React from 'react'
import { Link } from 'react-router';

 const AboutPreview = () => {
  return (
    <section className='mt-12 p-10 flex flex-col items-center gap-8 bg-gray-900 md:flex-row'>
         <img src="/images/profile.jpg" alt="profile"
          className="w-30 h-30 rounded-full object-cover border-4 border-blue-500"/>
            <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                    About Me!!
                </h2>
                <p className="text-gray-200 mb-4 max-w-4xl">
                         When server rendering, loader is used for both initial page loads and client navigations. 
                        Client navigations call the loader through an automatic fetch by React Router from the browser to your server.
                </p>
                <Link to="/about" className='inline-block text-blue-400 hover:underline text-sm'>Learn More About Me</Link>
            </div>
    </section>
  )
}

export default AboutPreview;