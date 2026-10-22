import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { FaLaptopCode ,FaTimes,FaBars} from 'react-icons/fa'

const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const base = 'transition hover:text-blue-400';
    const active = 'text-blue-400 font-semibold'
  return (
    <nav className='bg-gray-900 border-b border-gray-700 shadow-md sticky top-0 z-50'>
        <div className="max-w-6xl mx-auto py-4 flex justify-between items-center px-6">
            <NavLink to='/' className='flex items-center gap-2 text-lg text-blue-300 px-4'>
                <FaLaptopCode className='text-blue-400 text-xl'/>
                <span>Friendly Dev</span>
            </NavLink>
            <div className="hidden md:flex items-center gap-6">
                <div className="space-x-4 text-sm text-gray-300">
                    <NavLink to="/" className={({isActive}) => isActive ? active : base}>Home</NavLink>
                    <NavLink to="/blog" className={({isActive}) => isActive ? active : base}>Blog</NavLink>
                    <NavLink to="/projects" className={({isActive}) => isActive ? active : base}>Projects</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? active : base}>About</NavLink>
                    <NavLink to="/contact" className={({isActive}) => isActive ? active : base}>Contact</NavLink>
                </div>
            </div>
            <div className="md:hidden flex items-center gap-6">
                <button className="text-blue-400 text-xl cursor-pointer" onClick={()=>setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes/>:<FaBars/>}
                </button>
            </div>
        </div>
        {menuOpen && (
            <div className="md:hidden bg-gray-800 border-t border-gray-700 space-y-2 space-x-4 px-6 py-4 text-center">
                    <NavLink to="/" className={({isActive}) => isActive ? active : base}
                    onClick={()=>setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/blog" className={({isActive}) => isActive ? active : base}
                    onClick={()=>setMenuOpen(false)}>Blog</NavLink>
                    <NavLink to="/projects" className={({isActive}) => isActive ? active : base}
                    onClick={()=>setMenuOpen(false)}>Projects</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? active : base}
                    onClick={()=>setMenuOpen(false)}>About</NavLink>
                    <NavLink to="/contact" className={({isActive}) => isActive ? active : base}
                    onClick={()=>setMenuOpen(false)}>Contact</NavLink>
            </div>
        )}
    </nav>
  )
}

export default Navbar