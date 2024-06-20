import GoBackBtn from '@/components/buttons/GoBackBtn'
import Link from 'next/link'
import React from 'react'

function ProductPage() {
  return (
    <div className='inner-container-1 padding-top padding-bottom h-screen flex flex-col gap-2'>
        <div className='flex justify-between'>
            <GoBackBtn />
            <Link href={"#"} className='btn-3'>Edit Feedback</Link>
        </div>
        <div></div>
    </div>
  )
}

export default ProductPage