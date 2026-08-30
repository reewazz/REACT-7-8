import { useState } from "react"

export function Services () {

    const [query,setQuery] = useState("")
    

    const handleChange =(e)=> {
        console.log(e.target.value,"event")
setQuery(e.target.value)
    }
  
    return (
        <>

        <input value={query} onChange={(e)=>handleChange(e)} type="text" className="border border-gray-400" />

        <h1>The written value is  :  {query}   </h1>

        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ipsa, quam harum doloremque debitis quaerat blanditiis repellendus corporis. Id eum, asperiores quos voluptas corporis dolorem reiciendis nesciunt esse ad molestias.
        </div>

        <h1>Props value from parent is : </h1>
        </>
    )
}

