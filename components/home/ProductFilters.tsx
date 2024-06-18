"use client"

import { PRODUCT_FILTERS_LIST } from '@/constants'
import React, { useState } from 'react'
import ProductFiltersCard from '../cards/ProductFiltersCard'

function ProductFilters() {
    const [activeFilterItem, setActiveFilterItem] = useState<string>(PRODUCT_FILTERS_LIST[0])

  return (
    <div className='flex flex-wrap gap-2 gap-y-5 bg-light-1 px-6 py-6 w-full rounded-lg'>
        {PRODUCT_FILTERS_LIST.map((item) => {
            return (
                <ProductFiltersCard key={item} filterItem={item} activeFilterItem={activeFilterItem} setActiveFilterItem={setActiveFilterItem} />
            )
        })}
    </div>
  )
}

export default ProductFilters