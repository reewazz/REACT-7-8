import "./App.css"
import Navbar from "./components/Navbar"
import Button from "./components/Button"
import { Route, Routes } from "react-router-dom"
import CourseDetail from "./components/courses/CourseDetail"
import { useState } from "react"
import Contact from "./components/Contact"
import { Services } from "./pages/services/Services"
import  {Home}  from "./pages/home/Home"
import { TodoList } from "./components/TodoList"
import Product from "./components/ProductList"
import NewsList from "./components/News/NewsList"
import ApiProduct from "./components/Api/ApiProducts"
import Productdetail from "./components/Api/Productdetail"
import BlogLists from "./pages/blogs/BlogLists"
import AddBlog from "./pages/blogs/AddBlog"
import MantineUi from "./components/MantineUi"
import Login from "./pages/login/Login"
import Signup from "./pages/login/Signup"
import PrivateRoutes from "./routes/PrivateRoutes"
import Dashboard from "./pages/admin/Dashboard"



function App () {
  
    

  const test  = "hello test"
  return (
    <>

     
    <Navbar/>
    <Routes>

        <Route  path="about" element={<h1>This is about page</h1>}  /> 
        <Route  path="/" element={<Home name="apple" />}  /> 
        <Route  path="mantine" element={<MantineUi />}  /> 
        <Route  path="todo" element={<TodoList/>}  /> 
        <Route  path="addproduct" element={<Product/>}  /> 
        <Route  path="apiproduct" element={<ApiProduct test={test} name= "another props" />}  /> 
        <Route  path="news" element={<NewsList/>}  /> 
        <Route  path="contact" element={<Contact/>}  /> 
        <Route  path="services"  element={   <Services > <TodoList/>  </Services>}   /> 
        <Route  path="course"  element={<h1 className="text-center">This is Course page <TodoList/> </h1>}   /> 
        <Route  path="course/:name"  element={<CourseDetail/> }   /> 
        <Route  path="apiproduct/:id"  element={<Productdetail/> }   /> 
        <Route  path="blogs"  element={<BlogLists/> }   /> 
        <Route  path="admin/blogs/add"  element={ <PrivateRoutes> <AddBlog/></PrivateRoutes> }   /> 
        <Route  path="auth/login"  element={<Login/> }   /> 
        <Route  path="auth/signup"  element={<Signup/> }   /> 
        <Route  path="admin/dashboard"  element={ <PrivateRoutes><Dashboard/></PrivateRoutes>  }   /> 
        <Route path="*" element = {<h1>Page not found</h1>}/>

    </Routes>
    
{/* <h1 className="bg-black text-white">This is footer</h1> */}
    

    </>
  )
}

export default App