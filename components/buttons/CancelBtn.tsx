"use client"

import React from 'react'
import Button from '../ui/Button'
import { useRouter } from 'next/navigation'

function CancelBtn() {
    const router = useRouter()

  return (
    <Button type='button' variant='third' onClick={() => router.push("/")}>Cancel</Button>
  )
}

export default CancelBtn