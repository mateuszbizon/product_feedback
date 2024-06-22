"use client"

import React from 'react'

type Props = {
  setReplyFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ReplyBtn({ setReplyFormOpen }: Props) {
  return (
    <button className='text-7 font-semibold text-primary-2 hover:underline' onClick={() => setReplyFormOpen(prev => !prev)}>Reply</button>
  )
}

export default ReplyBtn