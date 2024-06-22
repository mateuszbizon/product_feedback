"use client"

import React from 'react'
import IconArrowLeft from '../icons/IconArrowLeft'
import { useRouter } from 'next/navigation'

function GoBackBtn() {
    const router = useRouter();

  return (
    <button className='flex items-center gap-3 text-7 font-bold text-dark-3 hover:underline' onClick={() => router.back()}><IconArrowLeft /> Go Back</button>
  )
}

export default GoBackBtn