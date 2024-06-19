import HomeHeaderDesktop from "@/components/home/HomeHeaderDesktop";
import HomeHeaderMobile from "@/components/home/HomeHeaderMobile";
import SortProducts from "@/components/home/SortProducts";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <HomeHeaderMobile />
        <HomeHeaderDesktop />
      </div>
      
      <div>
        <SortProducts />
        <Products />
      </div>
    </div>
  );
}
