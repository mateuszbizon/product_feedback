import React from 'react'
import ProductRoadmapCard from '../products/ProductRoadmapCard'

function RoadmapInProgress() {
  return (
    <div className='space-y-3'>
      <h2 className='text-3 md:text-6 xl:text-3 font-bold text-dark-2'>In-Progress (3)</h2>
      <p className='text-7 xl:text-4 text-dark-3'>Features currently being developed</p>
      <div className='flex flex-col gap-5'>
        <ProductRoadmapCard />
        <ProductRoadmapCard />
      </div>
    </div>
  )
}

export default RoadmapInProgress