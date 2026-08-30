import { Heart, HeartOff, Laptop } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ApiProduct = () => {
  const [newProduct, setNewProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {

  try {
      setLoading(true)
          const response = await fetch(
        "https://dummyjson.com/products"
      );

      const finalResponse = await response.json();

      console.log(finalResponse);

      setNewProduct(finalResponse.products);
      
  }
  catch(err) {
    alert("Error loading products")
     
  }
  finally {
    setLoading(false)
    alert("final statement")
  }
  
   
  
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">

      {/* ================= HEADER ================= */}
      <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between">

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-500">
            Our Collection
          </p>

          <h1 className="text-4xl font-extrabold text-gray-900">
            Explore Products
          </h1>

          <p className="mt-2 text-gray-500">
            Discover our latest products at amazing prices.
          </p>
        </div>

        <button
          onClick={fetchProduct}
          disabled={loading}
          className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Loading..." : "Fetch Products"}
        </button>

      </div>

      {/* ================= PRODUCT GRID ================= */}

      {newProduct.length === 0 && !loading ? (

        /* EMPTY STATE */

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white py-24">

          <div className="mb-4 text-6xl">
            🛍️
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            No Products Yet
          </h2>

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

 {loading && <div className="text-center">Products are loading from api ...... </div>}
          {newProduct.map((item) => (

            <Link to={`${item.id}`}
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* IMAGE */}

              <div className="relative h-64 overflow-hidden bg-gray-100">

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* DISCOUNT */}

                <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  -{Math.round(item.discountPercentage)}%
                </span>

                {/* WISHLIST */}

                <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-md transition hover:bg-orange-500 hover:text-white">
                    <Laptop/>
                </button>

              </div>

              {/* PRODUCT DETAILS */}

              <div className="p-5">

                {/* CATEGORY */}

                <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                  {item.category}
                </p>

                {/* TITLE */}

                <h2 className="mt-2 line-clamp-1 text-lg font-bold text-gray-900">
                  {item.title}
                </h2>

                {/* DESCRIPTION */}

                <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
                  {item.description}
                </p>

                {/* RATING + STOCK */}

                <div className="mt-4 flex items-center justify-between">

                  <span className="rounded-md bg-green-100 px-2 py-1 text-xs font-bold text-green-700">
                    ★ {item.rating}
                  </span>

                  <span className="text-xs text-gray-500">
                    {item.stock} available
                  </span>

                </div>

                {/* PRICE */}

                <div className="mt-4 flex items-center gap-3">

                  <span className="text-2xl font-extrabold text-gray-900">
                    ${item.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    $
                    {(
                      item.price /
                      (1 - item.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>

                </div>

                {/* BUTTON */}

                <button className="mt-5 w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition duration-300 hover:bg-orange-500">
                  Add to Cart
                </button>

              </div>

            </Link>

          ))}

        </div>

      )}
     

    </div>
  );
};

export default ApiProduct;