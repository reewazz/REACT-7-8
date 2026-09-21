import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GetRequest } from '../../services/http'

const BlogLists = () => {

    const token = localStorage.getItem("token")

    const [blogs,setBlogs] = useState([])
    
    const fetchBlogs = async()=>{


        const response = await GetRequest('blog/getAll')
        console.log(response)
        setBlogs(response.data)

    }


    console.log(blogs)

    useEffect(()=>{
        fetchBlogs()
    },[])

  return (
    <div>
        <h1>BlogLists</h1>

  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {blogs.map((blog) => (
      <div
        key={blog._id}
        className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg"
      >
        {/* Default Image */}
        <img
          src="data:image/jpeg;base64,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"
          alt={blog.title}
          className="h-48 w-full object-cover"
        />

        <div className="p-5">
          <span className="text-sm font-medium capitalize text-blue-600">
            {blog.category}
          </span>

          <h2 className="mt-2 text-xl font-bold text-gray-900">
            {blog.title}
          </h2>

          <p className="mt-2 text-gray-600">
            {blog.body}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              By {blog.author}
            </span>

            <span className="text-sm text-gray-500">
              ❤️ {blog.likes}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
    </div>
  )
}

export default BlogLists