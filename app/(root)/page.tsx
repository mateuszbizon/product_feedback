import HomeHeaderMobile from "@/components/home/HomeHeaderMobile";
import ProductSort from "@/components/home/ProductSort";


export default function Home() {
  return (
    <div className="flex flex-col">
      <div>
        <HomeHeaderMobile />
      </div>
      
      <div>
        <ProductSort />
      </div>
    </div>
  );
}
