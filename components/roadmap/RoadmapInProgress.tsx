import React from 'react'
import ProductRoadmapCard from '../products/ProductRoadmapCard'
import { ProductModelType } from '@/types'

type Props = {
  products: ProductModelType[];
}

function RoadmapInProgress({ products }: Props) {
  return (
    <div className='flex flex-col gap-1'>
      <h2 className='text-3 md:text-6 xl:text-3 font-bold text-dark-2'>In-Progress ({products.length})</h2>
      <p className='text-7 xl:text-4 text-dark-3'>Features currently being developed</p>
      <div className='flex flex-col gap-5 mt-7'>
        {products.map((product) => {
          return (
            <ProductRoadmapCard key={product._id} product={product} />
          )
        })}
      </div>
    </div>
  )
}

export default RoadmapInProgress