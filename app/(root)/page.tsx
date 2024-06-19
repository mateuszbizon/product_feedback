import HomeHeaderDesktop from "@/components/home/HomeHeaderDesktop";
import HomeHeaderMobile from "@/components/home/HomeHeaderMobile";
import SortProducts from "@/components/home/SortProducts";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <div className="flex flex-col md:gap-12 md:padding-top padding-bottom">
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
