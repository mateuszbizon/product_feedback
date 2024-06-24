import React from 'react'
import IconNewFeedback from '../icons/IconNewFeedback'

function CreateProductForm() {
  return (
    <div className='container-4 relative pt-5 space-y-6'>
        <div className='absolute -top-7 left-7'>
            <IconNewFeedback />
        </div>
        <h1 className='text-3 font-bold text-dark-2'>Create New Feedback</h1>
        <form className='flex flex-col gap-4'>
            <div className='flex flex-col'>
                <label htmlFor="title" className='label-1'>Feedback Title</label>
                <span className='input-help-text-1'>Add a short, descriptive headline</span>
                <input id="title" type="text" className='input-1' />
                <span className='input-error-message'>error</span>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="detail" className='label-1'>Feedback Detail</label>
                <span className='input-help-text-1'>Include any specific comments on what should be improved, added, etc.</span>
                <textarea id="detail" className='input-1 resize-none' rows={3}></textarea>
                <span className='input-error-message'>error</span>
            </div>

            <div className='flex flex-col gap-4 mt-3'>
                <button type='submit' className='btn-2'>Add Feedback</button>
                <button type='button' className='btn-4'>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default CreateProductForm