import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/view-posts').then((res) => {

      setPosts(res.data.data);
    })
  }, [])


  return (
    <section className='w-full h-screen bg-black text-white flex flex-col items-center'>
      <h1 className='text-5xl font-bold py-2'>Feed</h1>
      <div className='w-full bg-gray-800 p-4 flex justify-center'>
        <Link to='/create-post' className='flex justify-center items-center w-40 h-10 bg-gray-700  rounded-lg'>Create Post</Link>
      </div>
      
      <div className='w-full h-screen bg-gray-800 rounded-lg p-4 overflow-scroll items-center flex flex-col gap-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
        {posts.length === 0 ? (
          <p className='text-gray-400 text-lg'>No posts yet. Be the first to post!</p>
        ) : (

          posts.map((post, idx) => (

            <div key={idx} className='border-b border-gray-500 pb-4 mb-4 flex flex-col items-center gap-2 rounded-lg w-1/2'>
              <img src={post.image_url} alt="Post" className='w-50 h-48 object-cover rounded-lg mt-2' />
              <h2 className='text-xl font-semibold'>{post.caption}</h2>
            </div>
          ))

        )}
      </div>
    </section>
  )
}

export default Feed