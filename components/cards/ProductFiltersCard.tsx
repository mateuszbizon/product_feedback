"use client"

import React from 'react'

type Props = {
    productFilter: string;
    filterActive: string;
    setFilterActive: React.Dispatch<React.SetStateAction<string>>;
}

function ProductFiltersCard({ productFilter, filterActive, setFilterActive }: Props) {
  return (
    <button className={`py-2 px-4 rounded-lg font-semibold text-[13px] hover:bg-light-4 transition duration-300 ${filterActive === productFilter ? "bg-primary-2 text-light-1" : "bg-light-3 text-primary-2"}`} onClick={() => setFilterActive(productFilter)}>
        {productFilter}
    </button>
  )
}

export default ProductFiltersCard