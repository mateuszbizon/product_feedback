"use client"

import { ROADMAP_IN_PROGRESS_TEXT, ROADMAP_LIVE_TEXT, ROADMAP_PLANNED_TEXT } from '@/constants'
import React, { useState } from 'react'
import RoadmapPlanned from './RoadmapPlanned'
import RoadmapInProgress from './RoadmapInProgress'
import RoadmapLive from './RoadmapLive'
import RoadmapStatusBtn from './RoadmapStatusBtn'

function RoadmapMobile() {
    const [productStatusActive, setProductStatusActive] = useState(ROADMAP_PLANNED_TEXT)

  return (
    <div className='space-y-5'>
        <div className='grid grid-cols-3 border-b border-b-dark-3 text-7 font-bold text-dark-3'>
            <RoadmapStatusBtn productStatusActive={productStatusActive} setProductStatusActive={setProductStatusActive} productStatusName={ROADMAP_PLANNED_TEXT} />

            <RoadmapStatusBtn productStatusActive={productStatusActive} setProductStatusActive={setProductStatusActive} productStatusName={ROADMAP_IN_PROGRESS_TEXT} />

            <RoadmapStatusBtn productStatusActive={productStatusActive} setProductStatusActive={setProductStatusActive} productStatusName={ROADMAP_LIVE_TEXT} />
        </div>
        <div>
            {productStatusActive === ROADMAP_PLANNED_TEXT && <RoadmapPlanned />}
            {productStatusActive === ROADMAP_IN_PROGRESS_TEXT && <RoadmapInProgress />}
            {productStatusActive === ROADMAP_LIVE_TEXT && <RoadmapLive />}
        </div>
    </div>
  )
}

export default RoadmapMobile