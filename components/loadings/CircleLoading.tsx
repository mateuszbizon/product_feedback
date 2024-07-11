import React from 'react'

function CircleLoading() {
  return (
    <div className='flex justify-center py-10 w-full'>
        <div className='size-[50px] rounded-full border-2 border-primary-1 border-t-transparent animate-spin'></div>
    </div>
  )
}

export default CircleLoading