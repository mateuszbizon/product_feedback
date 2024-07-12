"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import ReplyBtn from '../buttons/ReplyBtn'
import ReplyCard from './ReplyCard'
import AddReplyForm from '../forms/AddReplyForm'
import { CommentModelType } from '@/types'

type Props = {
    comment: CommentModelType;
}

function CommentCard({ comment }: Props) {
    const [replyFormOpen, setReplyFormOpen] = useState(false)

  return (
    <div className='space-y-5 pt-5 first:p-0'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-5'>
                <div className='size-10'>
                    <Image src="/comment-img.jpg" width={200} height={200} alt='user profile image' className='w-full h-full object-cover rounded-full' />
                </div>
                <div className='flex flex-col'>
                    <span className='text-7 font-bold text-dark-2'>{comment.user.firstName} {comment.user.lastName}</span>
                    <span className='text-7 text-dark-3'>{comment.user.username}</span>
                </div>
            </div>

            <ReplyBtn setReplyFormOpen={setReplyFormOpen} />
        </div>

        <p className='text-7 md:text-5 text-dark-3'>
            {comment.content}
        </p>

        <div className={`${replyFormOpen ? "max-h-[1000px]" : "max-h-0"} overflow-hidden w-full transition-all duration-400`}>
            <AddReplyForm setReplyFormOpen={setReplyFormOpen} />
        </div>

        <div className='flex gap-5'>
            <div className='flex'>
                <div className='w-[2px] h-full bg-light-3'></div>
            </div>
            <div className='space-y-5 w-full'>
                {comment.replies.map((reply) => {
                    return (
                        <ReplyCard key={reply._id} reply={reply} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default CommentCard