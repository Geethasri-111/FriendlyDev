import React from 'react'
import ReactMarkdown from 'react-markdown'
import type { PostMeta } from '~/types'
import type { Route } from '../+types/root'
import { Link } from 'react-router';

export async function loader({request,params}:Route.LoaderArgs):Promise<any>{
    const {slug} = params;
    const url = new URL('/posts-meta.json',request.url);
    const res = await fetch(url.href);
    if(!res.ok) throw new Error('Request Failed');
    const data = await res.json();
    const postMeta = data.find((blog:PostMeta) => blog.slug === slug);
    if(!postMeta) throw new Response('Not Found',{status :404});
    const markdown = await import(`../posts/${slug}.md?raw`);

    return {
        postMeta,
        markdown : markdown.default
    };
}
type blogDetailProp ={
    loaderData :{
        postMeta :PostMeta,
        markdown :string
    }
} ;
const BlogDetail = ({loaderData}:blogDetailProp) => {
    const { postMeta, markdown} = loaderData;
  return (
    <div className='max-w-3xl mx-auto px-6 py-12 bg-gray-900 '>
        <h1 className="text-3xl font-bold text-blue-400 mb-2">
            {postMeta.title}
        </h1>
        <p className="text-sm text-gray-400 mb-6">
            {postMeta.date}
        </p>
        <p className="text-sm text-gray-400 mb-6">
            {postMeta.slug}
        </p>
        <div className='max-w-none mb-12'>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
        <Link to="/Blog" className='text-sm text-white hover:underline bg-blue-800 px-6 py-4'>Back to Blogs</Link>
    </div>
  )
}

export default BlogDetail