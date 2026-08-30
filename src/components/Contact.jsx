import { useState } from "react"

function Contact () {
    const [count,setCount] =  useState(0) 
  const [name,setName] = useState("riwaj")

  const [show,setShow] = useState(true)

  const [isPass,setIsPass] = useState(true)


  const  increase = ()=> {
   
    console.log(count,"inside increase")
  }



  const [color,setColor] = useState("gray")

  const [circle,setCirle] = useState(true)




    return (
        <>

      <div className="flex justify-center">
          <input className="border border-gray-400" type=  {isPass ? "password" : "text"}  />
            <button onClick={()=>setIsPass(!isPass)}   className="bg-blue-400 text-white p-2 rounded-2xl">
             {isPass ? "pass dekha":"pass nadekha"}
</button>
      </div>

        {show ? 
        <h1 className="text-center font-semibold">This message is showing</h1> : ""
        }   
            <button onClick={()=>setShow(!show)}   className="bg-blue-400 text-white p-2 rounded-2xl">
                
           {show ? "hide" : "show"}     </button>

             <div className="flex justify-center">
            
        <div className="flex gap-4 items-center">
            <button  onClick={()=>setCount(count-1)} className="bg-blue-400 text-white p-2 rounded-2xl">-</button>
            <h1>{count}</h1>
            <button onClick={ ()=> setCount(count+1) } className="bg-blue-400 text-white p-2 rounded-2xl">+</button>
            <button onClick={ ()=> setCount(0) } className="bg-blue-400 text-white p-2 rounded-2xl">reset</button>
        </div>
        </div>

        <div className="flex justify-center py-8">
          <div>
            <h1>Traffic light</h1>
          <div  className={`h-20 w-20 bg-${color}-500 ${circle ? "rounded-full" : ""} `}></div>
<div className="flex gap-4">
            <button onClick={()=>setColor("red")} className="bg-blue-400 text-white p-2 rounded-2xl">red</button>
          <button onClick={()=>setColor("yellow")} className="bg-blue-400 text-white p-2 rounded-2xl">yellow</button>
          <button onClick={()=>setColor("green")} className="bg-blue-400 text-white p-2 rounded-2xl">green</button>
          <button onClick={()=>setCirle(!circle)} className="bg-blue-400 text-white p-2 rounded-2xl"> {circle ? "square" : "circle"} </button>

</div>
          </div>
        </div>
        </>

    )
}

export default Contact