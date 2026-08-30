import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Productdetail = () => {
    const params = useParams()
     const [newProduct, setNewProduct] = useState({});
      const [loading, setLoading] = useState(false);
    
      const fetchProduct = async () => {
    
      try {
          setLoading(true)
              const response = await fetch(
            `https://dummyjson.com/products/${params.id}`
          );
    
          const finalResponse = await response.json();
    
          console.log(finalResponse);
    
          setNewProduct(finalResponse);
          
      }
      catch(err) {
        alert("Error loading products")
         
      }
      finally {
        setLoading(false)
        alert("final statement")
      }
      
       
      
      };


      console.log(newProduct)
  return (
    <div>
<button onClick={fetchProduct}>Fetch</button>   
 </div>
  )
}

export default Productdetail