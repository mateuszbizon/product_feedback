"use client"

import { PRODUCT_FILTERS_LIST } from '@/constants'
import React, { useState } from 'react'
import FilterProductsCard from '../cards/FilterProductsCard'

function FilterProducts() {
    const [activeFilterItem, setActiveFilterItem] = useState<string>(PRODUCT_FILTERS_LIST[0])

  return (
    <div className='flex flex-wrap gap-2 gap-y-5 bg-light-1 px-6 py-6 w-full rounded-lg'>
        {PRODUCT_FILTERS_LIST.map((item) => {
            return (
                <FilterProductsCard key={item} filterItem={item} activeFilterItem={activeFilterItem} setActiveFilterItem={setActiveFilterItem} />
            )
        })}
    </div>
  )
}

export default FilterProducts