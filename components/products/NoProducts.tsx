import React from 'react'
import IconIllustrationEmpty from '../icons/IconIllustrationEmpty'
import AddFeedbackLink from '../buttons/AddFeedbackLink'

function NoProducts() {
  return (
    <div className='container-4 flex flex-col items-center gap-4 py-20'>
        <div className='mb-5'>
            <IconIllustrationEmpty />
        </div>
        <p className='text-3 md:text-1 font-bold text-dark-2'>There is no feedback yet.</p>
        <p className='text-center text-7 md:text-4 font-normal text-dark-3 mb-2'>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
        <AddFeedbackLink />
    </div>
  )
}

export default NoProducts