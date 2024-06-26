"use client"

import { ReplySchemaType, replySchema } from '@/validations/replySchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import Textarea from '../ui/Textarea'
import InputErrorMessage from './InputErrorMessage'

type Props = {
    setReplyFormOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function AddReplyForm({ setReplyFormOpen }: Props) {
    const { handleSubmit, register, formState: { errors }, reset } = useForm<ReplySchemaType>({
        resolver: zodResolver(replySchema),
        defaultValues: {
            reply: "",
        }
    })

    function onSubmit(data: ReplySchemaType) {
        console.log(data)
        setReplyFormOpen(false)
        reset();
    }

  return (
    <form className='flex gap-5' onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full'>
            <Textarea name='reply' register={register} errors={errors.reply} placeholder='Type your reply here' />
            <InputErrorMessage errors={errors.reply} />
        </div>
        <div>
            <button type='submit' className='btn-2 whitespace-nowrap'>Post Reply</button>
        </div>
    </form>
  )
}

export default AddReplyForm