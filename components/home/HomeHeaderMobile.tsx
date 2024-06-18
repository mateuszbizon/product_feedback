"use client"

import React from 'react'
import IconHamburger from '../icons/IconHamburger'
import ProductFilters from './ProductFilters'

function HomeHeaderMobile() {
  return (
    <div className='relative h-home-header-height md:hidden'>
        <div className='flex justify-between bg-background-header-mobile bg-center bg-cover px-6 py-3'>
            <div className='flex flex-col'>
                <span className='font-bold text-[15px] text-light-1'>Frontend Mentor</span>
                <span className='text-[13px] text-light-1'>Feedback Board</span>
            </div>
            <button><IconHamburger /></button>
        </div>
        <aside className='absolute right-0 top-home-header-height h-[calc(100vh-theme(height.home-header-height))] bg-light-3 w-[270px] z-20 px-6 py-3'>
          <ProductFilters />
        </aside>
    </div>
  )
}

export default HomeHeaderMobile