"use client"

import { getAllProducts } from "@/actions/productActions";
import HomeHeaderDesktop from "@/components/home/HomeHeaderDesktop";
import HomeHeaderMobile from "@/components/home/HomeHeaderMobile";
import SortProducts from "@/components/home/SortProducts";
import Products from "@/components/products/Products";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  })

  return (
    <div className="container-1 flex flex-col xl:flex-row md:gap-12 xl:gap-6 md:padding-top padding-bottom">
      <div className="xl:w-1/5">
        <HomeHeaderMobile />
        <HomeHeaderDesktop />
      </div>

      {isError && (
        <div>{products?.error}</div>
      )}

      {isLoading && (
        <div>Fetching products...</div>
      )}
      
      {products && (
        <div className="xl:w-4/5">
          <SortProducts productsLength={products.data?.length!} />
          <Products products={products.data!} />
        </div>
      )}
    </div>
  );
}
