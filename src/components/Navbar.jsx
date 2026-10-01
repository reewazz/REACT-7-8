import { Link, NavLink } from "react-router-dom"
import Button from "./Button"
import { useContext } from "react"
import { CounterContext } from "./contexts/CounterContext"
import { Burger, Drawer } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
function Navbar () {

    const {count,setCount} = useContext(CounterContext)
        const [opened, { open, close }] = useDisclosure(false);

        const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Course', path: '/course' },
  { name: 'Blog', path: '/blogs' },
]



    return (
        <>
     <div className="hidden md:flex justify-between items-center h-20 px-20 bg-black text-white">
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
     <div className="bg-black flex justify-between p-4  md:hidden">
        <h1 className="text-white">Logo</h1>
      <Burger onClick={open}  color="white" aria-label="Toggle navigation" />
    
     </div>
    

  <Drawer
  opened={opened}
  onClose={close}
  position="right"
  size="xs"
  title={
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
        L
      </div>

      <div>
        <p className="text-lg font-bold text-gray-900">Logo</p>
        <p className="text-xs text-gray-500">Menu</p>
      </div>
    </div>
  }
  
  styles={{
    body: {
      padding: 0,
    },
    header: {
      padding: '16px 20px',
      borderBottom: '1px solid #e5e7eb',
    },
  }}
>
  <div className="flex min-h-[calc(100vh-80px)] flex-col">

    {/* Navigation */}
    <nav className="flex-1 px-5 py-6">

      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
        Navigation
      </p>

      <div className="flex flex-col gap-2">

        <NavLink
          to="/"
          onClick={close}
          className={({ isActive }) =>
            `flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition-all ${
              isActive
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
            }`
          }
        >
          <span>Home</span>
          <span className="text-lg">→</span>
        </NavLink>

        <NavLink
          to="/about"
          onClick={close}
          className={({ isActive }) =>
            `flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition-all ${
              isActive
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
            }`
          }
        >
          <span>About</span>
          <span className="text-lg">→</span>
        </NavLink>

        <NavLink
          to="/services"
          onClick={close}
          className={({ isActive }) =>
            `flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition-all ${
              isActive
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
            }`
          }
        >
          <span>Services</span>
          <span className="text-lg">→</span>
        </NavLink>

        <NavLink
          to="/course"
          onClick={close}
          className={({ isActive }) =>
            `flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition-all ${
              isActive
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
            }`
          }
        >
          <span>Course</span>
          <span className="text-lg">→</span>
        </NavLink>

        <NavLink
          to="/blogs"
          onClick={close}
          className={({ isActive }) =>
            `flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition-all ${
              isActive
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
            }`
          }
        >
          <span>Blog</span>
          <span className="text-lg">→</span>
        </NavLink>

      </div>
    </nav>

    {/* Bottom Section */}
    <div className="border-t border-gray-100 bg-gray-50 px-5 py-6">

      <div className="flex flex-col gap-3">

        <button
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
        >
          Login
        </button>

        <button
          className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Sign Up
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 py-3 text-sm font-medium text-gray-600 transition hover:border-blue-400 hover:text-blue-600"
        >
          <span className="text-lg">+</span>
          <span>Count: {count}</span>
        </button>

      </div>
    </div>

  </div>
</Drawer>


     
        </>
    )
}

export default Navbar