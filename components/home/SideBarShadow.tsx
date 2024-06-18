"use client"

import React from 'react'

type Props = {
  closeShadow: React.Dispatch<React.SetStateAction<boolean>>;
  shadowOpen: boolean;
}

function SideBarShadow({ closeShadow, shadowOpen }: Props) {
  return (
    <div className={`fixed z-10 top-home-header-height left-0 w-full h-[calc(100vh-theme(height.home-header-height))] bg-black/50 ${shadowOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-300`} onClick={() => closeShadow(false)}></div>
  )
}

export default SideBarShadow