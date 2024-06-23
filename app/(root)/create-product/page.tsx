import GoBackBtn from '@/components/buttons/GoBackBtn'
import AddCommentForm from '@/components/forms/AddCommentForm'
import React from 'react'

function CreateProductPage() {
  return (
    <div className='container-3 padding-top padding-bottom space-y-14 max-w-[540px]'>
        <div>
            <GoBackBtn />
        </div>
        <div className='container-4'>
            <AddCommentForm />
        </div>
    </div>
  )
}

export default CreateProductPage