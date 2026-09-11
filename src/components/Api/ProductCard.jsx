import { Laptop } from 'lucide-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CounterContext } from '../contexts/CounterContext'

const ProductCard = ({item,test}) => {

    const {count} = useContext(CounterContext)
  return (
   <Link
              to={`${item.id}`}
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
                  {/* -{Math.round(item.discountPercentage)}% */} {count}
                </span>

                {/* WISHLIST */}

                <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-md transition hover:bg-orange-500 hover:text-white">
                  <Laptop />
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
                    {(item.price / (1 - item.discountPercentage / 100)).toFixed(
                      2,
                    )}
                  </span>
                </div>

                {/* BUTTON */}

                <button className="mt-5 w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition duration-300 hover:bg-orange-500">
                  Add to Cart
                </button>
              </div>
            </Link>
  )
}

export default ProductCard