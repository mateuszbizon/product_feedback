"use client"

import { getRoadmapProducts } from '@/actions/productActions'
import AddFeedbackLink from '@/components/buttons/AddFeedbackLink'
import GoBackBtn from '@/components/buttons/GoBackBtn'
import RoadmapDesktop from '@/components/roadmap/RoadmapDesktop'
import RoadmapMobile from '@/components/roadmap/RoadmapMobile'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

function RoadmapPage() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["roadmap-products"],
    queryFn: () => getRoadmapProducts()
  })

  return (
    <div className='container-1 md:padding-top md:padding-bottom'>
        <div className='bg-dark-1 p-6 flex justify-between items-center md:rounded-xl'>
            <div className='space-y-2'>
                <GoBackBtn variant='go-back-2' />
                <h1 className='text-3 text-light-1 font-bold md:text-1'>Roadmap</h1>
            </div>
            <div>
                <AddFeedbackLink />
            </div>
        </div>

        <div>
          {isLoading && (
            <div>Fetching products...</div>
          )}

          {products?.data && (
            <div>
              <div className='md:hidden'>
                <RoadmapMobile roadmapProducts={products.data} />
              </div>
              <div className='hidden md:block mt-7'>
                <RoadmapDesktop roadmapProducts={products.data} />
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default RoadmapPage