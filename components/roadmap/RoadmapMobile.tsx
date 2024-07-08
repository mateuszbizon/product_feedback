"use client"

import { ROADMAP_IN_PROGRESS_TEXT, ROADMAP_LIVE_TEXT, ROADMAP_PLANNED_TEXT } from '@/constants'
import React, { useState } from 'react'
import RoadmapPlanned from './RoadmapPlanned'
import RoadmapInProgress from './RoadmapInProgress'
import RoadmapLive from './RoadmapLive'

function RoadmapMobile() {
    const [productStatusActive, setProductStatusActive] = useState(ROADMAP_PLANNED_TEXT)

  return (
    <div className='space-y-5'>
        <div className='grid grid-cols-3 border-b border-b-dark-3 py-5 text-7 font-bold text-dark-3'>
            <div className='relative'>
                <button className='w-full' onClick={() => setProductStatusActive(ROADMAP_PLANNED_TEXT)}>Planned (2)</button>
                <div className='absolute -bottom-[21px] left-0 w-full h-1 bg-primary-4'></div>
            </div>
            <div className='relative'>
                <button className='w-full' onClick={() => setProductStatusActive(ROADMAP_IN_PROGRESS_TEXT)}>In-Progress (3)</button>
                <div className='absolute -bottom-[21px] left-0 w-full h-1 bg-primary-1'></div>
            </div>
            <div className='relative'>
                <button className='w-full' onClick={() => setProductStatusActive(ROADMAP_LIVE_TEXT)}>Live (1)</button>
                <div className='absolute -bottom-[21px] left-0 w-full h-1 bg-primary-3'></div>
            </div>
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