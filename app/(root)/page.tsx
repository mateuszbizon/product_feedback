import HomeHeaderMobile from "@/components/home/HomeHeaderMobile";
import SortProducts from "@/components/home/SortProducts";



export default function Home() {
  return (
    <div className="flex flex-col">
      <div>
        <HomeHeaderMobile />
      </div>
      
      <div>
        <SortProducts />
      </div>
    </div>
  );
}
