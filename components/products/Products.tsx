import React from 'react'
import ProductCard from './ProductCard'
import NoProducts from './NoProducts'
import { ProductModelType } from '@/types'

type Props = {
  products: ProductModelType[];
}

function Products({ products }: Props) {
  return (
    <div className='container-2 flex flex-col gap-5 py-5'>
      {!products.length && (
        <NoProducts />
      )}
      
      {products.map((product) => {
        return (
          <ProductCard key={product._id} product={product} />
        )
      })}
    </div>
  )
}

export default Products