import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { APIURL, GetRequest, PostRequest } from '../../services/http'
import { Button, Select } from '@mantine/core'

const AddBlog = () => {

    const [title,setTitle] = useState("")
    const [users,setUsers] = useState([])
    const [author,setAuthor] = useState(null)

    const body = {
        title : title,
  author: author,
  body: "This is body from frontend",
    likes: 100,
    category : "postapi"
    }

    const fetchUsers = async ()=> {
        try {
            const res  = await GetRequest("user/getAll")
setUsers(res.data)
        }
          catch(err) {
            alert("Error while fetching")
        }
    }


    const handleSubmit = async()=> {
        try {
  const response = await PostRequest(`blog/create`,body)
        console.log(response)
        alert("Created Successfully")
        }
        catch(err) {
            alert("Error while creating")
        }
      

    }


    useEffect(()=>{
fetchUsers()
    },[])

    console.log(users,"users")
  return (
    <div className='flex flex-col px-20'>

        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='border border-gray-400 w-1/2' placeholder='enter your title' />
       <label htmlFor="">Select Author</label>
        {/* <select value={author} onChange={(e)=>setAuthor(e.target.value)} className='w-1/2' >

        {users.map((item,index)=>(
        <option value={item._id} >{item.fullName}</option>

        ))}
       

        </select> */}

        <Select searchable value={author} onChange={setAuthor} data={
            users.map((item,index)=>({
                label : item.fullName,
                value: item._id
            }))
        }/>
        
        <Button onClick={handleSubmit}>Create Blog</Button>
    </div>
  )
}

export default AddBlog