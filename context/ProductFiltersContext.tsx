"use client"

import { PRODUCT_FILTERS_LIST, PRODUCT_SORT_LIST } from "@/constants";
import React, { createContext, useContext, useState } from "react"

type ProductFiltersContextType = {
    filterActiveItem: string;
    setFilterActiveItem: React.Dispatch<React.SetStateAction<string>>;
    sortActiveItem: string;
    setSortActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

const ProductFiltersContext = createContext<ProductFiltersContextType>({
    filterActiveItem: "",
    setFilterActiveItem: () => {},
    sortActiveItem: "",
    setSortActiveItem: () => {}
})

export function useProductFilters() {
    return useContext(ProductFiltersContext)
}

type Props = {
    children: React.ReactNode;
}

export function ProductFiltersProvider({ children }: Props) {
    const [filterActiveItem, setFilterActiveItem] = useState<string>(PRODUCT_FILTERS_LIST[0])
    const [sortActiveItem, setSortActiveItem] = useState<string>(PRODUCT_SORT_LIST[0])

    const value: ProductFiltersContextType = {
        filterActiveItem,
        setFilterActiveItem,
        sortActiveItem,
        setSortActiveItem
    }

    return (
        <ProductFiltersContext.Provider value={value}>{children}</ProductFiltersContext.Provider>
    )
}