"use client"

import React from 'react'
import IconArrowDown from '../icons/IconArrowDown'
import Link from 'next/link'
import IconPlus from '../icons/IconPlus'

function ProductSort() {
  return (
    <div className='flex justify-between items-center bg-dark-1 px-6 py-2'>
        <div>
            <button className='flex items-center gap-1 font-bold text-[13px] text-light-1 whitespace-nowrap hover:text-light-3 transition duration-300'><span className='font-normal text-light-3'>Sort by:</span> Most Upvotes <IconArrowDown /></button>
        </div>

        <Link href="#" className='flex gap-1 items-center btn-2 whitespace-nowrap'><IconPlus /> Add Feedback</Link>
    </div>
  )
}

export default ProductSort