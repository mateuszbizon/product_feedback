"use client"

import { ReplySchemaType, replySchema } from '@/validations/replySchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import Textarea from '../ui/Textarea'
import InputErrorMessage from './InputErrorMessage'
import Button from '../ui/Button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createReply } from '@/actions/replyActions'
import { CommentModelType, CreateReplyResponseType, ReplyModelType } from '@/types'
import { toast } from 'react-toastify'
import { useAuth } from '@clerk/nextjs'

type Props = {
    setReplyFormOpen: React.Dispatch<React.SetStateAction<boolean>>
    comment: CommentModelType;
    reply?: ReplyModelType;
    productId: string;
}

function AddReplyForm({ setReplyFormOpen, comment, reply, productId }: Props) {
    const { handleSubmit, register, formState: { errors }, reset } = useForm<ReplySchemaType>({
        resolver: zodResolver(replySchema),
        defaultValues: {
            reply: "",
        }
    })

    const { userId } = useAuth()
    const queryClient = useQueryClient();
    const { mutate: handleCreateReply, isPending } = useMutation({
        mutationFn: createReply,
        onSuccess: (result: CreateReplyResponseType) => {
            if (result.data) {
                toast.success(result.message)
                setReplyFormOpen(false)
                reset();
                queryClient.invalidateQueries({ queryKey: ["product", productId] })
            } else {
                toast.error(result.error)
            }
        },
        onError: (result: CreateReplyResponseType) => {
            toast.error(result.error)
        }
    })

    function onSubmit(data: ReplySchemaType) {
        console.log(data)

        handleCreateReply({
            reply: data,
            creatorId: userId!,
            commentId: comment._id,
            replyingTo: reply ? reply.user.username : comment.user.username,
        })
    }

  return (
    <form className='flex gap-5' onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full'>
            <Textarea name='reply' register={register} errors={errors.reply} placeholder='Type your reply here' />
            <InputErrorMessage errors={errors.reply} />
        </div>
        <div>
            <Button type='submit' className='whitespace-nowrap' disabled={isPending}>{isPending ? "Adding..." : "Post Reply"}</Button>
        </div>
    </form>
  )
}

export default AddReplyForm