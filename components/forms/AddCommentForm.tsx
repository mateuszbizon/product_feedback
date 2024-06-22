"use client"

import useCharactersLeft from '@/hooks/useCharactersLeft';
import React, { useState } from 'react'

const MAX_LENGTH = 250;

function AddCommentForm() {
  const { charactersLeft, handleSetCharactersLeft } = useCharactersLeft(MAX_LENGTH);
  const [commentValue, setCommentValue] = useState("")
  
  function handleChangeTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    handleSetCharactersLeft(e.target.value)
    setCommentValue(e.target.value)
  }

  return (
    <div className='space-y-5'>
        <span className='text-3 text-dark-2 font-bold'>Add Comment</span>
        <form className='space-y-3'>
            <div>
                <textarea className='input-1 resize-none' placeholder='Type your comment here' maxLength={MAX_LENGTH} onChange={handleChangeTextarea} value={commentValue}></textarea>
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