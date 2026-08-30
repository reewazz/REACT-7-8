import { Link, NavLink } from "react-router-dom"
import Button from "./Button"
function Navbar () {
    return (
        <>
     <div className="flex justify-between items-center h-20 px-20 bg-black text-white">
        <h1>Logo</h1>
        <div className="nav-items flex gap-10 items-center">
            <NavLink to = "/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to ="course">Course</NavLink>
        </div>
            <div className="nav-items flex gap-10 items-center">

            <button>Login</button>
            <button>Signup</button>
        </div>
     </div>
    
        </>
    )
}

export default Navbar