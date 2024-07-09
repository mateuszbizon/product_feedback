import React from 'react'
import RoadmapPlanned from './RoadmapPlanned'
import RoadmapInProgress from './RoadmapInProgress'
import RoadmapLive from './RoadmapLive'

function RoadmapDesktop() {
  return (
    <div className='grid grid-cols-3 gap-3'>
        <RoadmapPlanned />
        <RoadmapInProgress />
        <RoadmapLive />
    </div>
  )
}

export default RoadmapDesktop