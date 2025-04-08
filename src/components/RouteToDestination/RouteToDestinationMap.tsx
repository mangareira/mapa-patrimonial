import type { RouteToDestinationMapProps } from "@/utils/interfaces/route-to-destination-props";

export default function RouteToDestinationMap({type}: RouteToDestinationMapProps) {
  return (
    <div className="flex items-center justify-center bg-cyan-300 flex-2/1 rounded-t-3xl">RouteToDestinationMap {type}</div>
  )
}
