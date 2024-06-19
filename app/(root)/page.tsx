import HomeHeaderMobile from "@/components/home/HomeHeaderMobile";
import SortProducts from "@/components/home/SortProducts";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div>
        <HomeHeaderMobile />
      </div>
      
      <div>
        <SortProducts />
        <Products />
      </div>
    </div>
  );
}
