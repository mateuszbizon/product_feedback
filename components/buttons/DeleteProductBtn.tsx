"use client"

import React from 'react'
import Button from '../ui/Button'

type Props = {
    children: React.ReactNode;
}

function DeleteProductBtn({ children }: Props) {
  return (
    <Button type='button' variant='delete'>{children}</Button>
  )
}

export default DeleteProductBtn