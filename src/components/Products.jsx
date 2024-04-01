import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/CartSlice'
import { fetchDataFromAPI } from '../features/ProductSlice'

const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product)

  const handleAdd = (product) => {
    dispatch(addToCart(product))
  }

  useEffect(() => {
    dispatch(fetchDataFromAPI())
  }, [])

  if (products.length <= 0) {
    return (
      <>
        <div className='flex justify-center items-center'>
          <p className='text-3xl text-center'>No products found</p>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='mx-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            products && products.map((product) => {
              const { id, title, description, image } = product
              return (
                <>
                  <div className="w-full md:w-[300px] rounded-md shadow-2xl my-2 p-4" key={id}>
                    <img
                      src={image}
                      alt="Laptop"
                      className="h-[200px] w-full rounded-t-md object-cover"
                    />
                    <div className="p-4">
                      <h1 className="inline-flex items-center text-lg font-semibold">
                        {title}
                      </h1>
                      {/* <h1 className="inline-flex items-center text-sm font-semibold">
                        ${price}
                      </h1> */}
                      <p className="mt-3 text-sm text-gray-600">
                        {description.substring(0, 70)}
                      </p>
                      {/* <div className="mt-4">
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                          {brand}
                        </span>
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                          {category}
                        </span>
                      </div> */}
                      <button
                        type="button"
                        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={() => handleAdd(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Products
