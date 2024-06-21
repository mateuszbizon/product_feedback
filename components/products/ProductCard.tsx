import React from 'react'
import UpVoteBtn from '../buttons/UpVoteBtn'
import IconComments from '../icons/IconComments'

function ProductCard() {
  return (
    <div className='product flex flex-col md:flex-row md:justify-between gap-3'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='hidden md:block'>
            <UpVoteBtn />
          </div>

          <div className='flex flex-col gap-3'>
            <p className='text-7 md:text-3 font-bold text-dark-2'>Add tags for solution</p>
            <p className='text-7 md:text-4 font-normal text-dark-3'>Easier to search for solutions based on specific stack.</p>
            <div className='filter-box w-fit'>Enhancement</div>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <div className='md:hidden'>
            <UpVoteBtn />
          </div>
          <div className='flex gap-2 items-center'>
              <IconComments />
              <span className='text-7 md:text-4 font-bold text-dark-2'>2</span>
          </div>
        </div>
    </div>
  )
}

export default ProductCard