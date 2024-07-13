"use client"

import React, { useState } from 'react'
import UpVoteBtn from '../buttons/UpVoteBtn'
import IconComments from '../icons/IconComments'
import { ProductModelType } from '@/types'
import Link from 'next/link'

type Props = {
  product: ProductModelType;
  isProductPage?: boolean;
}

function ProductCard({ product, isProductPage }: Props) {
  const [upVotes, setUpVotes] = useState<string[]>(product.upVotes)

  return (
    <Link href={`/product/${product._id}`} className={`group container-4 flex flex-col md:flex-row md:justify-between gap-3 ${isProductPage && "cursor-default"}`}>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='hidden md:block'>
            <UpVoteBtn upVotesProp={upVotes} setUpVotesProp={setUpVotes} />
          </div>

          <div className='flex flex-col gap-3'>
            <p className={`text-7 md:text-3 font-bold text-dark-2 ${!isProductPage && " group-hover:text-primary-2 transition"}`}>{product.title}</p>
            <p className='text-7 md:text-4 font-normal text-dark-3'>{product.details}</p>
            <div className='filter-box w-fit'>{product.category}</div>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <div className='md:hidden'>
            <UpVoteBtn upVotesProp={upVotes} setUpVotesProp={setUpVotes} />
          </div>
          <div className='flex gap-2 items-center'>
              <IconComments />
              <span className='text-7 md:text-4 font-bold text-dark-2'>{product.comments.length}</span>
          </div>
        </div>
    </Link>
  )
}

export default ProductCard