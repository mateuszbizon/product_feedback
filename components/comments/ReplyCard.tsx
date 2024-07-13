"use client"

import React, { useState } from 'react'
import ReplyBtn from '../buttons/ReplyBtn'
import Image from 'next/image'
import AddReplyForm from '../forms/AddReplyForm'
import { CommentModelType, ReplyModelType } from '@/types'

type Props = {
    reply: ReplyModelType;
    comment: CommentModelType;
    productId: string;
}

function ReplyCard({ reply, comment, productId }: Props) {
    const [replyFormOpen, setReplyFormOpen] = useState(false)

  return (
    <div className='space-y-5'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-5'>
                <div className='size-10'>
                    <Image src={reply.user.photo} width={200} height={200} alt='user profile image' className='w-full h-full object-cover rounded-full' />
                </div>
                <div className='flex flex-col'>
                    <span className='text-7 font-bold text-dark-2'>{reply.user.firstName} {reply.user.lastName}</span>
                    <span className='text-7 text-dark-3'>{reply.user.username}</span>
                </div>
            </div>

            <ReplyBtn setReplyFormOpen={setReplyFormOpen} />
        </div>

        <p className='text-7 md:text-5 text-dark-3'>
            <span className='text-primary-1 font-bold'>@{reply.replyingTo}</span> {reply.content}
        </p>

        <div className={`${replyFormOpen ? "max-h-[1000px]" : "max-h-0"} overflow-hidden w-full transition-all duration-400`}>
            <AddReplyForm setReplyFormOpen={setReplyFormOpen} reply={reply} comment={comment} productId={productId} />
        </div>
    </div>
  )
}

export default ReplyCard