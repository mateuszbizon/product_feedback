import React from 'react'
import RoadmapPlanned from './RoadmapPlanned'
import RoadmapInProgress from './RoadmapInProgress'
import RoadmapLive from './RoadmapLive'
import { RoadmapProductsType } from '@/types'

type Props = {
  roadmapProducts: RoadmapProductsType;
}

function RoadmapDesktop({ roadmapProducts }: Props) {
  return (
    <div className='grid grid-cols-3 gap-3'>
        <RoadmapPlanned products={roadmapProducts.plannedProducts} />
        <RoadmapInProgress products={roadmapProducts.inProgressProducts} />
        <RoadmapLive products={roadmapProducts.liveProducts} />
    </div>
  )
}

export default RoadmapDesktop