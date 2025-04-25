import type { RouteToDestinationProps } from "@/utils/interfaces/route-to-destination-props";
import RouteToDestinationMap from "./RouteToDestinationMap";
import clsx from "clsx";

export default function RouteToDestination({text, type, className}: RouteToDestinationProps) {
  return (
    <div className={`${className} w-full h-56 bg-[#5CE4E4] hover:bg-[#039FAA] border-[#B3DAE2] border rounded-3xl flex flex-col`}>
      <RouteToDestinationMap type={type} />
      <div className={clsx("flex-3/6 justify-center items-center flex", 
        type === "select" ? "" : "cursor-pointer"
      )}>
        <p className="text-white font-bold">{text}</p>
      </div>
    </div>
  )
}
