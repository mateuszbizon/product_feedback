"use client"

import React from 'react'

type Props = {
    productFilter: string;
    filterActive: string;
    setFilterActive: React.Dispatch<React.SetStateAction<string>>;
}

function ProductFiltersCard({ productFilter, filterActive, setFilterActive }: Props) {
  return (
    <button className={`btn-1 ${filterActive === productFilter ? "btn-1-active" : "btn-1-not-active"}`} onClick={() => setFilterActive(productFilter)}>
        {productFilter}
    </button>
  )
}

export default ProductFiltersCard