"use client"

import React from 'react'
import IconArrowDown from '../icons/IconArrowDown';

type Props = {
    activeItem: string;
    setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SelectButton({ activeItem, setDropdownOpen }: Props) {
  return (
    <button
        type='button' 
        className='input-1 flex justify-between items-center cursor-default' onClick={() => setDropdownOpen(prev => !prev)}>
        {activeItem} <div className='text-primary-2'><IconArrowDown /></div>
    </button>
  )
}

export default SelectButton