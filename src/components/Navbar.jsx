import { Link, NavLink } from "react-router-dom"
import Button from "./Button"
import { useContext } from "react"
import { CounterContext } from "./contexts/CounterContext"
function Navbar () {

    const {count,setCount} = useContext(CounterContext)
    return (
        <>
     <div className="flex justify-between items-center h-20 px-20 bg-black text-white">
        <h1> Logo </h1>
        <div className="nav-items flex gap-10 items-center">
            <NavLink to = "/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to ="course">Course</NavLink>
            <NavLink to ="blogs">Blog</NavLink>
        </div>
            <div className="nav-items flex gap-10 items-center">

            <button>Login</button>
            <button>Signup</button>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
     </div>
    
        </>
    )
}

export default Navbar