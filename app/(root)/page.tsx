import HomeHeaderDesktop from "@/components/home/HomeHeaderDesktop";
import HomeHeaderMobile from "@/components/home/HomeHeaderMobile";
import SortProducts from "@/components/home/SortProducts";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row md:gap-12 xl:gap-6 md:padding-top padding-bottom">
      <div className="xl:w-1/5">
        <HomeHeaderMobile />
        <HomeHeaderDesktop />
      </div>
      
      <div className="xl:w-4/5">
        <SortProducts />
        <Products />
      </div>
    </div>
  );
}
