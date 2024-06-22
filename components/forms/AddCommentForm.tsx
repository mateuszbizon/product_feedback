"use client"

import { COMMENT_MAX_LENGTH } from '@/constants';
import useCharactersLeft from '@/hooks/useCharactersLeft';
import { CommentSchemaType, commentSchema } from '@/validations/commentSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';

function AddCommentForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CommentSchemaType>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
    }
  })
  const { charactersLeft, handleSetCharactersLeft } = useCharactersLeft(COMMENT_MAX_LENGTH);
  
  function handleChangeTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    handleSetCharactersLeft(e.target.value)
  }

  function onSubmit(data: CommentSchemaType) {
    console.log(data)
    reset()
    handleSetCharactersLeft("")
  }

  return (
    <div className='space-y-5'>
        <span className='text-3 text-dark-2 font-bold'>Add Comment</span>
        <form className='space-y-3' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-1'>
                <textarea className={`input-1 ${errors.comment && "input-error-1"} resize-none`} placeholder='Type your comment here' maxLength={COMMENT_MAX_LENGTH} {...register("comment", {
                  onChange: (e) => handleChangeTextarea(e)
                })}></textarea>

                <span className={`${errors.comment ? "visible" : "invisible"} input-error-message`}>{errors.comment ? errors.comment.message : "error"}</span>
            </div>
            <div className='flex justify-between items-center'>
                <span className='text-5 text-dark-3'>{charactersLeft} characters left</span>
                <button type='submit' className='btn-2 whitespace-nowrap'>Post Comment</button>
            </div>
        </form>
    </div>
  )
}

export default AddCommentForm