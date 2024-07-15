"use client"

import React from 'react'
import Button from '../ui/Button'
import { useMutation } from '@tanstack/react-query';
import { deleteProduct } from '@/actions/productActions';
import { BasicResponse, DeleteProductResponseType } from '@/types';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

type Props = {
    children: React.ReactNode;
    productId: string;
}

function DeleteProductBtn({ children, productId }: Props) {
  const router = useRouter();
  const { userId } = useAuth();
  const { mutate: handleDeleteProduct, isPending } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (result: BasicResponse<DeleteProductResponseType>) => {
      if (result.data) {
        toast.success(result.message)
        router.push("/")
      } else {
        toast.error(result.error)
      }
    },
    onError: (result: BasicResponse<DeleteProductResponseType>) => {
      toast.error(result.error)
    }
  })

  function handleClick() {
    handleDeleteProduct({
      productId: productId,
      creatorId: userId!,
    })
  }

  return (
    <Button type='button' variant='delete' disabled={isPending} onClick={handleClick}>{isPending ? "deleting..." : children}</Button>
  )
}

export default DeleteProductBtn