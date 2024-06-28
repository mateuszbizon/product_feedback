import GoBackBtn from '@/components/buttons/GoBackBtn'
import CreateProductForm from '@/components/forms/CreateProductForm'
import React from 'react'

function EditProductPage() {
  return (
    <div className='container-3 padding-top padding-bottom space-y-14 max-w-[540px]'>
        <div>
            <GoBackBtn />
        </div>
        <CreateProductForm product={{ _id: "1", title: "Add a dark theme option", details: "Some details", category: "UI" }} />
    </div>
  )
}

export default EditProductPage