import GoBackBtn from '@/components/buttons/GoBackBtn'
import CreateProductForm from '@/components/forms/CreateProductForm'
import React from 'react'

function CreateProductPage() {
  return (
    <section>
      <div className='container-3 padding-top padding-bottom space-y-14 max-w-[540px]'>
          <div>
              <GoBackBtn />
          </div>
          <CreateProductForm />
      </div>
    </section>
  )
}

export default CreateProductPage