"use client"

import React, { useState } from 'react'
import IconHamburger from '../icons/IconHamburger'
import FilterProducts from './FilterProducts'
import IconClose from '../icons/IconClose'
import SideBarShadow from './SideBarShadow'
import RoadMap from './RoadMap'

function HomeHeaderMobile() {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <div className='h-home-header-height md:hidden'>
        <div className='flex justify-between bg-background-header-mobile bg-center bg-cover px-6 py-3 h-full'>
            <div className='flex flex-col'>
                <span className='font-bold text-[15px] text-light-1'>Frontend Mentor</span>
                <span className='text-[13px] text-light-1'>Feedback Board</span>
            </div>
            <button onClick={() => setSideBarOpen(prev => !prev)}>{sideBarOpen ? <IconClose /> : <IconHamburger />}</button>
        </div>

        <aside className={`flex flex-col gap-5 fixed right-0 top-home-header-height h-[calc(100vh-theme(height.home-header-height))] bg-light-3 w-[270px] z-20 px-6 py-3 ${sideBarOpen ? "translate-x-0" : "translate-x-full"} transition-all duration-300`}>
          <FilterProducts />
          <RoadMap />
        </aside>

        <SideBarShadow shadowOpen={sideBarOpen} closeShadow={setSideBarOpen} />
    </div>
  )
}

export default HomeHeaderMobile