import { useEffect, useState } from "react"

export function Services () {

    const [query,setQuery] = useState("")
    

    const handleChange =(e)=> {
        console.log(e.target.value,"event")
setQuery(e.target.value)
    }

    const [count,setCount] = useState(0)

    const makeAlert = ()=> {
        alert("Alert from function")
    }


   
    // useEffect (()=>{
    //     makeAlert()
     
    // },[count])

  

    localStorage.setItem("test","test data")
    localStorage.setItem("name",'riwaj neupane')
   
    const myName = localStorage.getItem("name") 

  
    return (
        <>
        <button onClick={makeAlert}>Alert</button>
        <input value={query} onChange={(e)=>handleChange(e)} type="text" className="border border-gray-400" />

        <h1>The local storage value is {myName}   </h1>

        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa, quam harum doloremque debitis quaerat blanditiis repellendus corporis. Id eum, asperiores quos voluptas corporis dolorem reiciendis nesciunt esse ad molestias.
        </div>

        <h1>Count value is : {count} </h1>
        <button onClick={()=>setCount(count+1)}>increase</button>
        </>
    )
}

