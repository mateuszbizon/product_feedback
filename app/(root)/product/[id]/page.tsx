import GoBackBtn from '@/components/buttons/GoBackBtn'
import AddCommentForm from '@/components/forms/AddCommentForm'
import Product from '@/components/products/Product'
import Link from 'next/link'
import React from 'react'

function ProductPage() {
  return (
    <div className='padding-top h-screen flex flex-col gap-2'>
        <div className='flex-1 space-y-5 overflow-y-auto'>
            <div className='container-3 flex justify-between max-w-[730px]'>
                <GoBackBtn />
                <Link href={"#"} className='btn-3'>Edit Feedback</Link>
            </div>
            <div className='container-3 max-w-[730px]'>
              <Product />
            </div>
        </div>

        <div className='container-3 max-w-[730px]'>
          <div className='container-4'>
            <AddCommentForm />
          </div>
        </div>
    </div>
  )
}

export default ProductPage