"use client"

import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {
  setReplyFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ReplyBtn({ setReplyFormOpen }: Props) {
  const { userId } = useAuth();
  const router = useRouter();

  function handleClick() {
    if (userId) {
      setReplyFormOpen(prev => !prev)

      return;
    }

    router.push("/sign-in");
  }

  return (
    <button className='text-7 font-semibold text-primary-2 hover:underline' onClick={handleClick}>Reply</button>
  )
}

export default ReplyBtn