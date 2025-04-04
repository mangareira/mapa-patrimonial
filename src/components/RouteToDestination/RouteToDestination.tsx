import RouteToDestinationMap from "./RouteToDestinationMap";

export default function RouteToDestination() {
  return (
    <div className="w-full h-50 bg-[#E6F7FB] border-[#B3DAE2] border-[1px] rounded-3xl flex flex-col">
      <RouteToDestinationMap />
      <div className="flex-3/6 justify-center items-center flex cursor-pointer">
        <p className="text-[#0089A5] font-bold">Ver rotas no Google Maps</p>
      </div>
    </div>
  )
}
