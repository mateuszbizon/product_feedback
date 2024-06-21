"use client"

import React from 'react'

function AddCommentForm() {
  return (
    <div className='space-y-5'>
        <span className='text-3 text-dark-2 font-bold'>Add Comment</span>
        <form className='space-y-3'>
            <div>
                <textarea className='input-1 resize-none' placeholder='Type your comment here'></textarea>
            </div>
            <div className='flex justify-between items-center'>
                <span className='text-5 text-dark-3'>250 characters left</span>
                <button type='submit' className='btn-2 whitespace-nowrap'>Post Comment</button>
            </div>
        </form>
    </div>
  )
}

export default AddCommentForm