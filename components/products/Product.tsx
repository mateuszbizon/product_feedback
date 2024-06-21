import React from 'react'
import ProductCard from './ProductCard'
import CommentCard from '../comments/CommentCard'

function Product() {
  return (
    <div className='space-y-5'>
        <ProductCard />
        <div className='product space-y-5'>
            <span className='text-3 font-bold text-dark-2'>4 Comments</span>
            <div className='space-y-5 divide-y'>
                <CommentCard />
                <CommentCard />
            </div>
        </div>
    </div>
  )
}

export default Product