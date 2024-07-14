import React, { useState } from 'react'
import IconComments from '../icons/IconComments'
import UpVoteBtn from '../buttons/UpVoteBtn'
import { getProductStatusColor } from '@/utils/getProductStatusColor'
import { ProductModelType } from '@/types'

type Props = {
  product: ProductModelType;
}

function ProductRoadmapCard({ product }: Props) {
  return (
    <div className='container-4 relative flex flex-col gap-3'>
        <div className={`absolute top-0 left-0 w-full h-[6px] rounded-t-lg ${getProductStatusColor(product.status)}`}></div>

        <div className='flex gap-2 items-center mb-1'>
            <div className={`size-2 rounded-full ${getProductStatusColor(product.status)}`}></div>
            <span className='text-7 xl:text-4 text-dark-3'>{product.status}</span>
        </div>

        <div className='flex flex-col gap-3'>
            <p className='text-7 xl:text-3 font-bold text-dark-2'>{product.title}</p>
            <p className='text-7 xl:text-4 font-normal text-dark-3'>{product.details}</p>
            <div className='filter-box w-fit'>{product.category}</div>
        </div>

        <div className='flex justify-between items-center'>
          <div>
            <UpVoteBtn upVotesProp={product.upVotes} isRoadmap={true} productId={product._id} />
          </div>
          <div className='flex gap-2 items-center'>
              <IconComments />
              <span className='text-7 md:text-4 font-bold text-dark-2'>{product.comments.length}</span>
          </div>
        </div>
    </div>
  )
}

export default ProductRoadmapCard