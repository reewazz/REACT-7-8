import { Heart, HeartOff, Laptop } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ApiProduct = ({name,test}) => {
  const [newProduct, setNewProduct] = useState([]);
  const [loading, setLoading] = useState(false);


  // const user = {
  //   name :'some value',
  //   test : "some test value"
  // }
    
  //  const {name} = user    //const name = user.name
  //  const {test} = user
  //  const {abc} = user


  //  console.log(name,test, "destructure3d value")

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8080/products");

      const finalResponse = await response.json();

      console.log(finalResponse);

      setNewProduct(finalResponse);
    } catch (err) {
      alert("Error loading products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);


  const categories =  ["All", ...new Set(newProduct.map((item)=>item.category)) ]
  console.log(categories,"Categeeee")




//   const handleFilter = (cat)=> {
//     const updated = newProduct.filter((item,index)=>item.category===cat)
// setNewProduct(updated)
//   }
const [cat,setCat] = useState("All")

  const filteredProducts = cat==="All" ? newProduct : newProduct.filter((item,index)=>item.category===cat) 

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* ================= HEADER ================= */}
      <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-500">
           Our Collection
          </p>

          <h1 className="text-4xl font-extrabold text-gray-900">
Explore Products          </h1>

          <p className="mt-2 text-gray-500">
            Discover our latest products at amazing prices.
          </p>
        </div>

      
      </div>

      <div className="flex gap-4 justify-center py-4">
        {categories.map((item,index)=>(
  <button
  onClick={()=>setCat(item) }
          className={`rounded-xl ${cat===item ? "bg-black" : " bg-orange-500"} px-6 py-3 font-semibold text-white shadow-md transition ${cat===item ? "hover:bg-black": "hover:bg-orange-600"} hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60`}
   
        >
      {item} 
        </button>
        ))}
        
      </div>

      {/* ================= PRODUCT GRID ================= */}

      {newProduct.length === 0 && !loading ? (
        /* EMPTY STATE */

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white py-24">
          <div className="mb-4 text-6xl">🛍️</div>

          <h2 className="text-2xl font-bold text-gray-800">No Products Yet</h2>

          <p className="mt-2 text-gray-500">
            Click "Fetch Products" to load the products.
          </p>

          <button
            onClick={fetchProduct}
            className="mt-6 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-orange-500"
          >
            Load Products
          </button>
        </div>
      ) : (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading && (
            <div className="text-center">
              Products are loading from api ......{" "}
            </div>
          )}
          {filteredProducts.map((item,index) => (
          <ProductCard test={test} item = {item} key={index}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApiProduct;
