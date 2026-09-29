import React from 'react'
import { TodoList } from '../components/TodoList'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { Title } from '@mantine/core'

const PrivateRoutes = ({children}) => {

    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    if (!token ) {
        return   <Navigate to = "/auth/login" />
    }

    if (token && role==="ADMIN") {
    
  return (
    <>
  
   
  <div className="flex w-full "> 
            <div className='flex flex-col gap-6 bg-black text-white w-1/6 h-screen p-6'>
            <Title size={30} >Admin Admin</Title>
          <Link to={"/admin/dashboard"}>Dashboard</Link>
          <Link to={"blogs/add"}>Blog</Link>
          <div>Home</div>
            </div>
        
        <div className='w-5/6 p-4'>
            <Outlet/>
        </div>
         </div>
    </>
  )
    }

}

export default PrivateRoutes