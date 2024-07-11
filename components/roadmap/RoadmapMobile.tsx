"use client"

import { ROADMAP_IN_PROGRESS_TEXT, ROADMAP_LIVE_TEXT, ROADMAP_PLANNED_TEXT } from '@/constants'
import React, { useState } from 'react'
import RoadmapPlanned from './RoadmapPlanned'
import RoadmapInProgress from './RoadmapInProgress'
import RoadmapLive from './RoadmapLive'
import RoadmapStatusBtn from './RoadmapStatusBtn'
import { RoadmapProductsType } from '@/types'

type Props = {
  roadmapProducts: RoadmapProductsType;
}

function RoadmapMobile({ roadmapProducts }: Props) {
    const [productStatusActive, setProductStatusActive] = useState(ROADMAP_PLANNED_TEXT)

  return (
    <div className='space-y-5'>
        <div className='grid grid-cols-3 border-b border-b-dark-3 text-7 font-bold text-dark-3'>
            <RoadmapStatusBtn productStatusActive={productStatusActive} setProductStatusActive={setProductStatusActive} productStatusName={ROADMAP_PLANNED_TEXT} productsLength={roadmapProducts.plannedProducts.length} />

            <RoadmapStatusBtn productStatusActive={productStatusActive} setProductStatusActive={setProductStatusActive} productStatusName={ROADMAP_IN_PROGRESS_TEXT} productsLength={roadmapProducts.inProgressProducts.length} />

            <RoadmapStatusBtn productStatusActive={productStatusActive} setProductStatusActive={setProductStatusActive} productStatusName={ROADMAP_LIVE_TEXT} productsLength={roadmapProducts.liveProducts.length} />
        </div>
        <div className='px-5 md:px-0'>
            {productStatusActive === ROADMAP_PLANNED_TEXT && <RoadmapPlanned products={roadmapProducts.plannedProducts} />}
            {productStatusActive === ROADMAP_IN_PROGRESS_TEXT && <RoadmapInProgress products={roadmapProducts.inProgressProducts} />}
            {productStatusActive === ROADMAP_LIVE_TEXT && <RoadmapLive products={roadmapProducts.liveProducts} />}
        </div>
    </div>
  )
}

export default RoadmapMobile