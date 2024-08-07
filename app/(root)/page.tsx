"use client"

import { getAllProducts } from "@/actions/productActions";
import ErrorMessage from "@/components/errors/ErrorMessage";
import HomeHeaderDesktop from "@/components/home/HomeHeaderDesktop";
import HomeHeaderMobile from "@/components/home/HomeHeaderMobile";
import SortProducts from "@/components/home/SortProducts";
import CircleLoading from "@/components/loadings/CircleLoading";
import Products from "@/components/products/Products";
import { useProductFilters } from "@/context/ProductFiltersContext";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { filterActiveItem, sortActiveItem } = useProductFilters();
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["products", filterActiveItem, sortActiveItem],
    queryFn: () => getAllProducts({
      category: filterActiveItem,
      sort: sortActiveItem,
    }),
  })

  return (
    <section>
      <div className="container-1 flex flex-col xl:flex-row md:gap-12 xl:gap-6 md:padding-top padding-bottom">
        <div className="xl:w-1/5">
          <HomeHeaderMobile />
          <HomeHeaderDesktop />
        </div>

        
        <div className="xl:w-4/5">
          <SortProducts productsLength={products?.data?.length} />

          {isError && (
            <ErrorMessage message={products?.error!} />
          )}
          
          {isLoading && (
            <CircleLoading />
          )}
          
          {products?.data && (
            <Products products={products.data} />
          )}
        </div>
      </div>
    </section>
  );
}
