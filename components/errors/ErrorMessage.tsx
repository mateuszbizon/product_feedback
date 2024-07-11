import React from 'react'
import IconIllustrationEmpty from '../icons/IconIllustrationEmpty'

type Props = {
    message: string
}

function ErrorMessage({ message }: Props) {
    return (
        <div className='container-4 flex flex-col items-center gap-4 py-20'>
            <div className='mb-5'>
                <IconIllustrationEmpty />
            </div>
            <p className='text-3 md:text-1 font-bold text-dark-2'>Ooops something went wrong!</p>
            <p className='text-center text-7 md:text-4 font-normal text-dark-3 mb-2'>{message}</p>
        </div>
      )
}

export default ErrorMessage