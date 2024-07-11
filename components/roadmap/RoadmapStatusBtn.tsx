"use client"

import { getProductStatusColor } from '@/utils/getProductStatusColor';
import React from 'react'

type Props = {
    productStatusActive: string;
    setProductStatusActive: React.Dispatch<React.SetStateAction<string>>;
    productStatusName: string;
    productsLength: number;
}

function RoadmapStatusBtn({ productStatusActive, setProductStatusActive, productStatusName, productsLength }: Props) {
  return (
    <div className='relative'>
        <button className={`w-full py-5 ${productStatusActive === productStatusName && "text-dark-2"}`} onClick={() => setProductStatusActive(productStatusName)}>{productStatusName} ({productsLength})</button>
        <div className={`absolute -bottom-[1px] left-0 w-full h-1 ${productStatusActive === productStatusName && getProductStatusColor(productStatusName)}`}></div>
    </div>
  )
}

export default RoadmapStatusBtn