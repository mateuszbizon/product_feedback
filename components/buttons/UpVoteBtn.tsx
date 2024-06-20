"use client"

import React from 'react'
import IconArrowUp from '../icons/IconArrowUp'

function UpVoteBtn() {
  return (
    <button className='btn-1 btn-1-not-active flex items-center md:flex-col md:px-2 gap-1'>
        <div className='text-primary-2'>
            <IconArrowUp />
        </div>
        <span className='text-7 font-bold text-dark-2'>112</span>
    </button>
  )
}

export default UpVoteBtn