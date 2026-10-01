import React from 'react'
import { APIURL } from '../services/http'

const ApiImage = ({path}) => {
  return (
     <img
        src={`${APIURL}/${path}`}
          alt={path}
          className="h-48 w-full object-cover"
        />
  )
}

export default ApiImage