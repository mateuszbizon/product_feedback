"use client"

import GoBackBtn from '@/components/buttons/GoBackBtn'
import ErrorMessage from '@/components/errors/ErrorMessage'
import AddCommentForm from '@/components/forms/AddCommentForm'
import CircleLoading from '@/components/loadings/CircleLoading'
import Product from '@/components/products/Product'
import useGetSingleProduct from '@/hooks/useGetSingleProduct'
import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

type Props = {
  params: {
    id: string;
  }
}

function ProductPage({ params }: Props) {
  const { product, isLoading, isError } = useGetSingleProduct({
    productId: params.id,
  })
  const { userId } = useAuth();

  return (
    <section>
      <div className='padding-top h-screen flex flex-col gap-2'>
          <div className='flex-1 space-y-5 overflow-y-auto'>
              <div className='container-3 flex justify-between max-w-[730px]'>
                  <GoBackBtn />
                  {product?.data && product.data.creator.clerkId === userId && (
                    <Link href={`/edit-product/${product.data._id}`} className='btn-3'>Edit Feedback</Link>
                  )}
              </div>
              <div className='container-3 max-w-[730px]'>
                {isError || product?.error && (
                  <ErrorMessage message={product?.error!} />
                )}

                {isLoading && (
                  <CircleLoading />
                )}

                {product?.data && (
                  <Product product={product.data} />
                )}
              </div>
          </div>

          <div className='container-3 max-w-[730px]'>
            {product?.data && (
              <div className='container-4'>
                <AddCommentForm product={product.data} />
              </div>
            )}
          </div>
      </div>
    </section>
  )
}

export default ProductPage