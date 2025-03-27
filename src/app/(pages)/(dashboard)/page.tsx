import Maps from "@/components/Map";
import SubNav from "@/components/SubNav";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex-[0.75]">
        <SubNav />
      </div>
      <div className="flex-2 ">
        <Maps />
      </div>
    </div>
  )
}
