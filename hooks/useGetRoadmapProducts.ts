"use client"

import { getRoadmapProducts } from '@/actions/productActions'
import { useQuery } from '@tanstack/react-query'

function useGetRoadmapProducts() {
    const { data: products, isLoading, isError } = useQuery({
        queryKey: ["roadmap-products"],
        queryFn: () => getRoadmapProducts()
      })

  return {
    products,
    isLoading,
    isError,
  }
}

export default useGetRoadmapProducts