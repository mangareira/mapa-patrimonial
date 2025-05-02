import type { RouteToDestinationProps } from "@/utils/interfaces/route-to-destination-props";
import RouteToDestinationMap from "./RouteToDestinationMap";
import clsx from "clsx";
import { useGoogle } from "@/utils/hooks/useGoogle";

export default function RouteToDestination({text, type, className, position, marker_pin, onSelect}: RouteToDestinationProps) {
  const {location} = useGoogle()

  const handleOpenGoogleMaps = () => {
    if (type === "select") return;
    const originParam = `${location.lat},${location.lng}`;
    const destinationParam = `${position.lat},${position.lng}`;
    
    window.open(
      `https://www.google.com/maps/dir/?api=1&origin=${originParam}&destination=${destinationParam}&travelmode=driving`,
      "_blank"
    );
  };

  return (
    <div className={`${className} w-full h-56  border-[#B3DAE2] border rounded-3xl flex flex-col`}>
      <RouteToDestinationMap 
        type={type} 
        position={position}
        marker_pin={marker_pin}
        onSelect={onSelect}
      />
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div 
        className={clsx("flex-3/6 justify-center items-center flex bg-[#5CE4E4] rounded-b-3xl", 
        type === "select" ? "" : "cursor-pointer hover:bg-[#039FAA] hover:text-white"
        )}
        onClick={handleOpenGoogleMaps}
        // biome-ignore lint/a11y/useSemanticElements: <explanation>
        role="button"
        tabIndex={0}
      >
        <p className=" font-bold">{text}</p>
      </div>
    </div>
  )
}
