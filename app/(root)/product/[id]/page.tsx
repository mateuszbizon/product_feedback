import GoBackBtn from '@/components/buttons/GoBackBtn'
import Product from '@/components/products/Product'
import Link from 'next/link'
import React from 'react'

function ProductPage() {
  return (
    <div className='inner-container-1 padding-top padding-bottom h-screen flex flex-col gap-2 max-w-[730px]'>
        <div className='flex-1 space-y-5 overflow-y-auto'>
            <div className='flex justify-between'>
                <GoBackBtn />
                <Link href={"#"} className='btn-3'>Edit Feedback</Link>
            </div>
            <Product />
        </div>
    </div>
  )
}

export default ProductPage