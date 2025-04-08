import type { RouteToDestinationProps } from "@/utils/interfaces/route-to-destination-props";
import RouteToDestinationMap from "./RouteToDestinationMap";

export default function RouteToDestination({text, type}: RouteToDestinationProps) {
  return (
    <div className="w-full h-50 bg-[#E6F7FB] border-[#B3DAE2] border-[1px] rounded-3xl flex flex-col">
      <RouteToDestinationMap type={type} />
      <div className="flex-3/6 justify-center items-center flex cursor-pointer">
        <p className="text-[#0089A5] font-bold">{text}</p>
      </div>
    </div>
  )
}
