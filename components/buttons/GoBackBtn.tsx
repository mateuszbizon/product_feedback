"use client"

import React from 'react'
import IconArrowLeft from '../icons/IconArrowLeft'
import { useRouter } from 'next/navigation'
import Button from '../ui/Button';

function GoBackBtn() {
    const router = useRouter();

  return (
    <Button variant='go-back' className='flex items-center gap-3' onClick={() => router.back()}><IconArrowLeft /> Go Back</Button>
  )
}

export default GoBackBtn