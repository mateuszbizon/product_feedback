"use client"

import React from 'react'
import IconArrowUp from '../icons/IconArrowUp'

type Props = {
  isRoadmap?: boolean;
}

function UpVoteBtn({ isRoadmap }: Props) {
  function handleClick(event: React.MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
  }

  return (
    <button className={`btn-1 btn-1-not-active flex items-center ${!isRoadmap && "md:flex-col md:px-2"} gap-1`} onClick={handleClick}>
        <div className='text-primary-2'>
            <IconArrowUp />
        </div>
        <span className='text-7 font-bold text-dark-2'>112</span>
    </button>
  )
}

export default UpVoteBtn