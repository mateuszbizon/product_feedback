"use client"

import React, { useState } from 'react'
import ReplyBtn from '../buttons/ReplyBtn'
import Image from 'next/image'
import AddReplyForm from '../forms/AddReplyForm'

function ReplyCard() {
    const [replyFormOpen, setReplyFormOpen] = useState(false)

  return (
    <div className='space-y-5'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-5'>
                <div className='size-10'>
                    <Image src="/comment-img.jpg" width={200} height={200} alt='user profile image' className='w-full h-full object-cover rounded-full' />
                </div>
                <div className='flex flex-col'>
                    <span className='text-7 font-bold text-dark-2'>Anne Valentine</span>
                    <span className='text-7 text-dark-3'>@anev1990</span>
                </div>
            </div>

            <ReplyBtn setReplyFormOpen={setReplyFormOpen} />
        </div>

        <p className='text-7 md:text-5 text-dark-3'>
            <span className='text-primary-1 font-bold'>@hummingbird1</span> Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
        </p>

        <div className={`${replyFormOpen ? "max-h-[1000px]" : "max-h-0"} overflow-hidden w-full transition-all duration-400`}>
            <AddReplyForm setReplyFormOpen={setReplyFormOpen} />
        </div>
    </div>
  )
}

export default ReplyCard