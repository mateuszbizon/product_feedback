"use client"

import React from 'react'
import IconCheck from '../icons/IconCheck';
import useClickOutside from '@/hooks/useClickOutside';

type Props = {
    dropdownList: string[];
    dropdownOpen: boolean;
    setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
    activeItem: string;
    setActiveItem: (item: string) => void | React.Dispatch<React.SetStateAction<string>>;
    topOffset?: number;
}

function SelectDropdown({ dropdownList, dropdownOpen, activeItem, setDropdownOpen, setActiveItem, topOffset }: Props) {
    const dropdownRef = useClickOutside<HTMLUListElement>(() => setDropdownOpen(false), dropdownOpen)

    function handleClickDropdownItem(item: string) {
        setDropdownOpen(false)
        setActiveItem(item)
    }

  return (
    <ul 
        ref={dropdownRef}
		className={`flex flex-col absolute top-12 left-0 bg-light-1 w-full rounded-lg shadow-lg transition-all duration-300 z-10 ${dropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} style={{ top: `${topOffset}px` }}>
        {dropdownList.map((item) => {
            return (
                <li key={item} className='flex justify-between items-center px-5 py-3 border-b border-b-light-3 text-dark-3 text-7 md:text-5 cursor-pointer hover:text-primary-1 transition duartion-300' onClick={() => handleClickDropdownItem(item)}>{item} {activeItem === item && <IconCheck />}</li>
            )
        })}
    </ul>
  )
}

export default SelectDropdown