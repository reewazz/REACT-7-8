// import React from 'react'
import { useState } from 'react'


const Product = () => {
   
 
const [products,setProducts] = useState([
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    category: "Electronics",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    category: "Electronics",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    category: "Footwear",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Classic Backpack",
    price: 49.99,
    category: "Accessories",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 39.99,
    category: "Accessories",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Leather Wallet",
    price: 34.99,
    category: "Accessories",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "Minimalist Chair",
    price: 159.99,
    category: "Furniture",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Ceramic Coffee Mug",
    price: 19.99,
    category: "Home",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Mechanical Keyboard",
    price: 99.99,
    category: "Electronics",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Cotton T-Shirt",
    price: 24.99,
    category: "Clothing",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  },
]);





  return (
    <div className="px-20 " >
        
          

   
        
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {products.map((item) => (
    <div
      key={item.id}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow backdrop-blur">
          {item.category}
        </span>

        {/* Favorite */}
        <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow backdrop-blur transition hover:bg-white hover:text-red-500">
          ♡
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2 flex items-center gap-1 text-sm">
          <span className="text-yellow-400">★</span>
          <span className="font-medium text-gray-700">{item.rating}</span>
          <span className="text-gray-400">(120)</span>
        </div>

        <h2 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-indigo-600">
          {item.name}
        </h2>

        <div className="mb-5 flex items-center justify-between">
          <p className="text-2xl font-bold text-gray-900">
            ${item.price}
          </p>

          <span className="text-sm text-green-600">
            In Stock
          </span>
        </div>

        {/* Button */}
        <button className="w-full rounded-xl bg-gray-900 px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-indigo-600 active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>



    </div>
  )
}

export default Product