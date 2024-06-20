import Link from 'next/link'
import React from 'react'
import IconPlus from '../icons/IconPlus'

function AddFeedbackLink() {
  return (
    <Link
        href='#'
        className='flex gap-1 items-center btn-2 whitespace-nowrap'>
        <IconPlus /> Add Feedback
    </Link>
  )
}

export default AddFeedbackLink