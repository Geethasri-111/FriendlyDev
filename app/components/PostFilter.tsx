import React from 'react'

type PostFilterProps = {
    searchQuery :string,
    onSearchChange :(value:string)=> void
}

const PostFilter = ({searchQuery,onSearchChange}:PostFilterProps) => {
  return (
    <div className='mb-6'>
        <input type="text" placeholder='search Posts' value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 rounded-lg bg-gray-100 text-white border
        focus:outline-none border-gray-700 focus:ring-2 focus:ring-blue-500" />
    </div>
  )
}

export default PostFilter