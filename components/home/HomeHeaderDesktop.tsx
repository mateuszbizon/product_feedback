import React from 'react'
import FilterProducts from './FilterProducts'
import RoadMap from './RoadMap'

function HomeHeaderDesktop() {
  return (
    <div className='hidden md:grid grid-cols-3 gap-5'>
        <div className='flex flex-col justify-end bg-background-header-tablet bg-center bg-cover h-full text-light-1 rounded-lg p-6'>
            <h1 className='text-2 font-bold'>Frontend Mentor</h1>
            <span className='text-5'>Feedback Board</span>
        </div>
        <FilterProducts />
        <RoadMap />
    </div>
  )
}

export default HomeHeaderDesktop