import React from 'react'
import UpVoteBtn from '../buttons/UpVoteBtn'
import IconComments from '../icons/IconComments'

function Product() {
  return (
    <div className='product flex flex-col gap-3'>
        <p className='font-bold text-[13px] text-dark-2'>Add tags for solution</p>
        <p className='text-[13px] text-dark-3'>Easier to search for solutions based on specific stack.</p>
        <div className='filter-box w-fit'>Enhancement</div>
        <div className='flex justify-between items-center'>
            <UpVoteBtn />
            <div className='flex gap-2 items-center'>
                <IconComments />
                <span className='font-bold text-[13px] text-dark-2'>2</span>
            </div>
        </div>
    </div>
  )
}

export default Product