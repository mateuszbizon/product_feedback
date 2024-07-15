"use client"

import React from 'react'
import IconArrowLeft from '../icons/IconArrowLeft'
import { useRouter } from 'next/navigation'
import Button from '../ui/Button';

type Props = {
  variant?: "go-back" | "go-back-2";
}

function GoBackBtn({ variant }: Props) {
    const router = useRouter();
    const buttonVariant = variant ? variant : "go-back";

  return (
    <Button variant={buttonVariant} className='flex items-center gap-3' onClick={() => router.push("/")}>
      <div className={buttonVariant === "go-back" ? "text-primary-2" : ""}><IconArrowLeft /></div> Go Back
    </Button>
  )
}

export default GoBackBtn