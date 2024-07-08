import React from 'react'
import IconComments from '../icons/IconComments'
import UpVoteBtn from '../buttons/UpVoteBtn'
import { getProductStatusColor } from '@/utils/getProductStatusColor'

function ProductRoadmapCard() {
  return (
    <div className='container-4 relative flex flex-col gap-3'>
        <div className={`absolute top-0 left-0 w-full h-[6px] rounded-t-lg ${getProductStatusColor("In-Progress")}`}></div>

        <div className='flex gap-2 items-center mb-1'>
            <div className={`size-2 rounded-full ${getProductStatusColor("In-Progress")}`}></div>
            <span className='text-7 xl:text-4 text-dark-3'>In Progress</span>
        </div>

        <div className='flex flex-col gap-3'>
            <p className='text-7 md:text-3 font-bold text-dark-2'>Add tags for solution</p>
            <p className='text-7 md:text-4 font-normal text-dark-3'>Easier to search for solutions based on specific stack.</p>
            <div className='filter-box w-fit'>Enhancement</div>
        </div>

        <div className='flex justify-between items-center'>
          <div>
            <UpVoteBtn isRoadmap={true} />
          </div>
          <div className='flex gap-2 items-center'>
              <IconComments />
              <span className='text-7 md:text-4 font-bold text-dark-2'>2</span>
          </div>
        </div>
    </div>
  )
}

export default ProductRoadmapCard