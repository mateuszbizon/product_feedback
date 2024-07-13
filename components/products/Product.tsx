import React from 'react'
import ProductCard from './ProductCard'
import CommentCard from '../comments/CommentCard'
import { ProductModelType } from '@/types'

type Props = {
  product: ProductModelType;
}

function Product({ product }: Props) {
  return (
    <div className='space-y-5'>
        <ProductCard product={product} isProductPage={true} />
        <div className='container-4 space-y-5'>
            <span className='text-3 font-bold text-dark-2'>{product.comments.length} Comments</span>
            <div className='space-y-5 divide-y'>
                {product.comments.map((comment) => {
                  return (
                    <CommentCard key={comment._id} comment={comment} productId={product._id} />
                  )
                })}
            </div>
        </div>
    </div>
  )
}

export default Product