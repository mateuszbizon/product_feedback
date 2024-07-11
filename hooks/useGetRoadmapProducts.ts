"use client"

import { getRoadmapProducts } from '@/actions/productActions'
import { useQuery } from '@tanstack/react-query'

function useGetRoadmapProducts() {
    const { data: products, isLoading } = useQuery({
        queryKey: ["roadmap-products"],
        queryFn: () => getRoadmapProducts()
      })

  return {
    products,
    isLoading,
  }
}

export default useGetRoadmapProducts