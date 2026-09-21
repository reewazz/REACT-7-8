import React, { useState } from "react";
import CommonSection from "../../components/CommonSection";
import UserCard from "../../components/UserCard";
import { Button, RollingNumber } from '@mantine/core';


export const Home = ({ name }) => {
  const [showModal,setShowModal] = useState(false)
  const [count,setCount] = useState(0)
  const [users, setUsers] =
    useState([
      {
        name: "kalash",
        age: 22,
      },
       {
        name: "unish",
        age: 23,
      }, {
        name: "utsav",
        age: 24,
      },
    ]);
  return (
    <div className="flex items-center flex-col">
      <RollingNumber value={count} fz="36px" />
      <Button onClick={()=>setCount(count+1)} variant="filled" size="md">Increase</Button>
      <CommonSection />


   {showModal && 
      <div className="fixed bg-black text-white left-1/2 top-1/2 -translate-x-[50%] -translate-y-1/2 ">
        <h2>Course Name</h2>
        <input className="border border-gray-400" type="text" />
        <h2>Course price</h2>
             <input className="border border-gray-400" type="text" />

        <h2>Course Duration</h2>
              <input className="border border-gray-400" type="text" />

      </div>}
      <div className="grid grid-cols-3 gap-8 px-20">
      {users.map((item,index)=> (
         <UserCard key={index} name ={item.name} age = {item.age}  />
      ))}


<UserCard name = "riwaj" age ="16" />
<UserCard name = "riwaj" age ="16" />
   
      </div>
    </div>
  );
};
