import { getSingleProduct } from "@/actions/productActions"
import { useQuery } from "@tanstack/react-query"

type Props = {
    productId: string
}

function useGetSingleProduct({ productId }: Props) {
    const { data: product, isLoading, isError } = useQuery({
        queryKey: ["product"],
        queryFn: () => getSingleProduct({
            productId: productId,
        })
    })

  return {
    product,
    isLoading,
    isError,
  }
}

export default useGetSingleProduct