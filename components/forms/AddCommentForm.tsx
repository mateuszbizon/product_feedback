"use client"

import { COMMENT_MAX_LENGTH } from '@/constants';
import useCharactersLeft from '@/hooks/useCharactersLeft';
import { CommentSchemaType, commentSchema } from '@/validations/commentSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import InputErrorMessage from './InputErrorMessage';
import Button from '../ui/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createComment } from '@/actions/commentActions';
import { useAuth } from '@clerk/nextjs';
import { BasicResponse, CreateCommentResponseType, ProductModelType } from '@/types';
import { toast } from 'react-toastify';

type Props = {
  product: ProductModelType;
}

function AddCommentForm({ product }: Props) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CommentSchemaType>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
    }
  })
  const { charactersLeft, handleSetCharactersLeft } = useCharactersLeft(COMMENT_MAX_LENGTH);

  const { userId } = useAuth();
  const queryClient = useQueryClient();
  const { mutate: handleCreateComment, isPending } = useMutation({
    mutationFn: createComment,
    onSuccess: (result: BasicResponse<CreateCommentResponseType>) => {
      if (result.data) {
        toast.success(result.message)
        reset()
        handleSetCharactersLeft("")
        queryClient.invalidateQueries({ queryKey: ['product', product._id] });
      } else {
        toast.error(result.error)
      }
    },
    onError: (result: BasicResponse<CreateCommentResponseType>) => {
      toast.error(result.error)
    }
  })
  
  function handleChangeTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    handleSetCharactersLeft(e.target.value)
  }

  function onSubmit(data: CommentSchemaType) {
    console.log(data)

    handleCreateComment({
      comment: data,
      creatorId: userId!,
      productId: product._id,
    })
  }

  return (
    <div className='space-y-5'>
        <span className='text-3 text-dark-2 font-bold'>Add Comment</span>
        <form className='space-y-3' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-1'>
                <textarea className={`input-1 ${errors.comment && "input-error-1"} resize-none`} placeholder='Type your comment here' maxLength={COMMENT_MAX_LENGTH} {...register("comment", {
                  onChange: (e) => handleChangeTextarea(e)
                })}></textarea>

                <InputErrorMessage errors={errors.comment} />
            </div>
            <div className='flex justify-between items-center'>
                <span className='text-5 text-dark-3'>{charactersLeft} characters left</span>
                <Button type='submit' className='whitespace-nowrap' disabled={isPending}>{isPending ? "Adding..." : "Post Comment"}</Button>
            </div>
        </form>
    </div>
  )
}

export default AddCommentForm