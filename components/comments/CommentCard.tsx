import Image from 'next/image'
import React from 'react'
import ReplyBtn from '../buttons/ReplyBtn'
import ReplyCard from './ReplyCard'

function CommentCard() {
  return (
    <div className='space-y-5 pt-5 first:p-0'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-5'>
                <div className='size-10'>
                    <Image src="/comment-img.jpg" width={200} height={200} alt='user profile image' className='w-full h-full object-cover rounded-full' />
                </div>
                <div className='flex flex-col'>
                    <span className='text-7 font-bold text-dark-2'>Elijah Moss</span>
                    <span className='text-7 text-dark-3'>@hexagon.bestagon</span>
                </div>
            </div>

            <ReplyBtn />
        </div>

        <p className='text-7 md:text-5 text-dark-3'>
            Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
        </p>

        <div className='flex gap-5'>
            <div className='flex'>
                <div className='w-[2px] h-full bg-light-3'></div>
            </div>
            <div className='space-y-5'>
                <ReplyCard />
                <ReplyCard />
            </div>
        </div>
    </div>
  )
}

export default CommentCard