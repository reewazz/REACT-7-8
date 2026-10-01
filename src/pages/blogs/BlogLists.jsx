import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { APIURL, GetRequest } from '../../services/http'
import ApiImage from '../ApiImage'

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
    <div className="">
        <h1>BlogLists</h1>


        <h1> Want to create some blogs</h1>
        <img src="data:image/jpeg;base64,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" alt="" />

  <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 ">
    {blogs.map((blog) => (
      <div
        key={blog._id}
        className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg"
      >
        {/* Default Image */}
       <ApiImage path={blog.image}/>

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
              By {blog?.author?.fullName}
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