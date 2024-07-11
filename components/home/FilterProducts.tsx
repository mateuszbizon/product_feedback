"use client"

import { PRODUCT_FILTERS_LIST } from '@/constants'
import React from 'react'
import FilterProductsCard from '../cards/FilterProductsCard'
import { useProductFilters } from '@/context/ProductFiltersContext'

function FilterProducts() {
    const { filterActiveItem, setFilterActiveItem } = useProductFilters();

  return (
    <div className='flex flex-wrap gap-2 gap-y-5 bg-light-1 px-6 py-6 w-full rounded-lg'>
        {PRODUCT_FILTERS_LIST.map((item) => {
            return (
                <FilterProductsCard key={item} filterItem={item} activeFilterItem={filterActiveItem} setActiveFilterItem={setFilterActiveItem} />
            )
        })}
    </div>
  )
}

export default FilterProducts