import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const UserRoutes = ({children}) => {

    
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    if (!token ) {
        return   <Navigate to = "/auth/login" />
    }

    if (token && role==="USER") {
    
  return (
    <>
  
   
    {children}
    </>
  )
    }

}

export default UserRoutes