import React from 'react'
import ProductRoadmapCard from '../products/ProductRoadmapCard'

function RoadmapPlanned() {
  return (
    <div className='flex flex-col gap-5'>
      <ProductRoadmapCard />
      <ProductRoadmapCard />
    </div>
  )
}

export default RoadmapPlanned