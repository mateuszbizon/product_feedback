import React from 'react'
import IconIllustrationEmpty from '../icons/IconIllustrationEmpty'
import AddFeedbackLink from '../buttons/AddFeedbackLink'

function NoProducts() {
  return (
    <div className='product flex flex-col items-center gap-4 py-20'>
        <div className='mb-5'>
            <IconIllustrationEmpty />
        </div>
        <p className='font-bold text-[18px] text-dark-2'>There is no feedback yet.</p>
        <p className='text-center text-[13px] text-dark-3 mb-2'>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
        <AddFeedbackLink />
    </div>
  )
}

export default NoProducts