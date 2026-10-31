import React from 'react'
import { useState } from 'react';
import type { Route } from './+types/Blog'
import type { PostMeta } from '~/types';
import PostCard from '~/components/PostCard';
import Pagination from '~/components/Pagination';
import PostFilter from '~/components/PostFilter';


export async function loader({request}:Route.LoaderArgs):Promise<{blogList:PostMeta[]}>{
  const url = new URL('/posts-meta.json',request.url);
    const blogres = await fetch(url.href);
    if(!blogres) throw new Error('failed to execute');
    const data = await blogres.json();
    return {blogList: data }
    
  }

const Blog = ({loaderData}:Route.ComponentProps) => {
   const [currentPage,setCurrentPage] = useState(1);
   const [searchQuery,setSearchQuery] = useState('');
    const {blogList} = loaderData;
   const postsPerPage =3;
  const filteredPosts = blogList.filter((blog) => {
    const query = searchQuery.toLowerCase();
    return blog.title.toLowerCase().includes(query) ||  blog.excerpt.toLowerCase().includes(query);
  })
  
   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
   const indexLastPage = currentPage * postsPerPage;
   const FirstPage = indexLastPage -  postsPerPage;
   const currentPosts = filteredPosts.slice(FirstPage,indexLastPage);
 //filter

 
  return (
    <div className='max-w-3xl mx-auto px-6 py-6 mt-6 bg-gray-900'>
        <h2 className='text-3xl text-white font-bold mb-8'>Blogs</h2>
        <PostFilter searchQuery={searchQuery} onSearchChange={(q)=>{ setSearchQuery(q);setCurrentPage(1)}}/>
       <div className="space-y-8">
        {currentPosts.length === 0 ? (
          <p className="text-gray-300 text-center">
            No Blogs Found
          </p>
        ) : currentPosts.map((blog) => (
          <PostCard blog={blog} key={blog.slug}/>
         ))
        }
       
        </div>
        {totalPages >1 &&(
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page) => setCurrentPage(page)} />
        )}  
        
    </div>
  )
}

export default Blog