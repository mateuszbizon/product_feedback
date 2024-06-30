import AddFeedbackLink from '@/components/buttons/AddFeedbackLink'
import GoBackBtn from '@/components/buttons/GoBackBtn'
import React from 'react'

function RoadmapPage() {
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

        <div></div>
    </div>
  )
}

export default RoadmapPage