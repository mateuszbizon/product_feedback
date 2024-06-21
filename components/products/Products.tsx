import React from 'react'
import ProductCard from './ProductCard'
import NoProducts from './NoProducts'

function Products() {
  return (
    <div className='container-2 flex flex-col gap-5 py-5'>
        <NoProducts />
    </div>
  )
}

export default Products