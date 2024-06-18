"use client"

import React from 'react'
import IconCheck from '../icons/IconCheck';

type Props = {
    sortItem: string;
    activeSortItem: string;
    setActiveSortItem: React.Dispatch<React.SetStateAction<string>>;
    setSortModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function ProductSortCard({ sortItem, activeSortItem, setActiveSortItem, setSortModalOpen }: Props) {
    function handleActiveSortItem(item: string) {
        setActiveSortItem(item)
        setSortModalOpen(false)
    }

  return (
    <li className={`flex justify-between items-center px-6 py-3 border-b border-b-light-3 text-dark-3 cursor-pointer hover:text-primary-1 transition duartion-300`} onClick={() => handleActiveSortItem(sortItem)}>{sortItem} {activeSortItem === sortItem && <IconCheck />}</li>
  )
}

export default ProductSortCard