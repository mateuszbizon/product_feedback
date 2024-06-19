import React from 'react'
import Product from './Product'
import NoProducts from './NoProducts'

function Products() {
  return (
    <div className='inner-container-1 flex flex-col gap-5 py-5'>
        <NoProducts />
    </div>
  )
}

export default Products