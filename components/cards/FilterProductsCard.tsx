"use client"

import React from 'react'

type Props = {
    filterItem: string;
    activeFilterItem: string;
    setActiveFilterItem: React.Dispatch<React.SetStateAction<string>>;
}

function FilterProductsCard({ filterItem, activeFilterItem, setActiveFilterItem }: Props) {
  return (
    <button className={`btn-1 ${activeFilterItem === filterItem ? "btn-1-active" : "btn-1-not-active"}`} onClick={() => setActiveFilterItem(filterItem)}>
        {filterItem}
    </button>
  )
}

export default FilterProductsCard