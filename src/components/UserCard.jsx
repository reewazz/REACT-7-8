import React from 'react'

const UserCard = (userValue) => {


  // const userValue = {
  //   name : "kalash"
  // }

console.log(userValue,"userko value")

  return (
<div className='border border-gray-400 rounded-xl shadow-lg p-4'>
            <h1> {userValue.name} </h1>
            <h2> {userValue.age} </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quia quos ullam nesciunt ratione asperiores nisi rerum adipisci quasi sit?</p>
          </div>
            )
}

export default UserCard