"use client"

import useGetRoadmapProducts from '@/hooks/useGetRoadmapProducts'
import Link from 'next/link'
import React from 'react'

function RoadMap() {
    const { products } = useGetRoadmapProducts();

  return (
    <div className='flex flex-col gap-5 bg-light-1 w-full rounded-lg p-6'>
        <div className='flex justify-between items-center'>
            <span className='text-3 font-bold text-dark-2'>Roadmap</span>
            <Link href="/roadmap" className='text-primary-2 font-semibold text-7 underline hover:text-primary-5 transition duration-300'>View</Link>
        </div>

        <div className='flex flex-col gap-2'>
            <div className='flex justify-between'>
                <div className='flex gap-4 items-center'>
                    <div className='rounded-full w-2 h-2 bg-primary-4'></div>
                    <span className='text-dark-3'>Planned</span>
                </div>
                <span className='font-bold text-dark-3'>{products?.data?.plannedProducts.length}</span>
            </div>

            <div className='flex justify-between'>
                <div className='flex gap-4 items-center'>
                    <div className='rounded-full w-2 h-2 bg-primary-1'></div>
                    <span className='text-dark-3'>In-Progress</span>
                </div>
                <span className='text-4 font-bold text-dark-3'>{products?.data?.inProgressProducts.length}</span>
            </div>

            <div className='flex justify-between'>
                <div className='flex gap-4 items-center'>
                    <div className='rounded-full w-2 h-2 bg-primary-3'></div>
                    <span className='text-dark-3'>Live</span>
                </div>
                <span className='text-4 font-bold text-dark-3'>{products?.data?.liveProducts.length}</span>
            </div>
        </div>
    </div>
  )
}

export default RoadMap