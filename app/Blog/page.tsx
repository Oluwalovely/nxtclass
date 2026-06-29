import React from 'react'
import { Posts } from '../types';

const Blog = async () => {
    const data = await fetch("https://dummyjson.com/posts");
    const posts = await data.json();
    const myPosts: Posts[] = posts.posts;
    return(
        <div>
            <h1 className='text-3xl font-bold mb-1 text-center'>BLOG POSTS</h1>

            <div className='grid grid-cols-3  gap-4 p-4'>
                {myPosts.map((post, idx) => (
                <div key={idx} className = 'border border-gray-400 rounded-2xl p-4 bg-gray-100 gap-2 flex flex-col'>
                    <h2 className='text-xl font-bold text-center'>{post.title}</h2>
                    <p className='text-base text-gray-700 line-clamp-4'>{post.body}</p>
                    <p className='text-sm text-gray-600 font-bold'>{post.tags.map((t) => `#${t}`).join(' ')}</p>
                    <p className='text-sm text-gray-600'>👍{post.reactions.likes} likes, 👎{post.reactions.dislikes} dislikes</p>
                    <code className='text-xs text-gray-500'>👁{post.views} views</code>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Blog