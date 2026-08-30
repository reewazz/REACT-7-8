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



function App () {
  
    
  return (
    <>

     
    <Navbar/>
    <Routes>

        <Route  path="about" element={<h1>This is about page</h1>}  /> 
        <Route  path="/" element={<Home name="apple" />}  /> 
        <Route  path="todo" element={<TodoList/>}  /> 
        <Route  path="addproduct" element={<Product/>}  /> 
        <Route  path="apiproduct" element={<ApiProduct/>}  /> 
        <Route  path="news" element={<NewsList/>}  /> 
        <Route  path="contact" element={<Contact/>}  /> 
        <Route  path="services"  element={<Services/>}   /> 
        <Route  path="course"  element={<h1 className="text-center">This is Course page <TodoList/> </h1>}   /> 
        <Route  path="course/:name"  element={<CourseDetail/> }   /> 
        <Route  path="apiproduct/:id"  element={<Productdetail/> }   /> 
        <Route path="*" element = {<h1>Page not found</h1>}/>

    </Routes>
    
{/* <h1 className="bg-black text-white">This is footer</h1> */}
    

    </>
  )
}

export default App