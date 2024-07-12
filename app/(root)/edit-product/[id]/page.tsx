"use client"

import GoBackBtn from '@/components/buttons/GoBackBtn'
import ErrorMessage from '@/components/errors/ErrorMessage'
import CreateProductForm from '@/components/forms/CreateProductForm'
import CircleLoading from '@/components/loadings/CircleLoading'
import useGetSingleProduct from '@/hooks/useGetSingleProduct'
import React from 'react'

type Props = {
  params: {
    id: string;
  }
}

function EditProductPage({ params }: Props) {
  const { product, isLoading, isError } = useGetSingleProduct({ productId: params.id })

  return (
    <div className='container-3 padding-top padding-bottom space-y-14 max-w-[540px]'>
        <div>
            <GoBackBtn />
        </div>
        {isError || product?.error && (
          <ErrorMessage message={product?.error} />
        )}

        {isLoading && (
          <CircleLoading />
        )}

        {product?.data && (
          <CreateProductForm product={product.data} />
        )}
    </div>
  )
}

export default EditProductPage