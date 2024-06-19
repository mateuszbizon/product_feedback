"use client"

import React from 'react'
import IconArrowUp from '../icons/IconArrowUp'

function UpVoteBtn() {
  return (
    <button className='btn-1 btn-1-not-active flex items-center gap-1'>
        <div className='text-primary-2'>
            <IconArrowUp />
        </div>
        <span className='font-bold text-[13px] text-dark-2'>112</span>
    </button>
  )
}

export default UpVoteBtn