import axios from 'axios'
import React, { useState } from 'react'

const AddBlog = () => {

    const [title,setTitle] = useState("")

    const body = {
        title : title,
  author: "react js",
  body: "This is body from frontend",
    likes: 100,
    category : "postapi"
    }


    const handleSubmit = async()=> {
        try {
  const response = await axios.post("http://localhost:8080/blog/create",body)
        console.log(response)
        alert("Created Successfully")
        }
        catch(err) {
            alert("Error while creating")
        }
      

    }

  return (
    <div>

        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='border border-gray-400' placeholder='enter your title' />
        <button onClick={handleSubmit}>Create Blog</button>
    </div>
  )
}

export default AddBlog