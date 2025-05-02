import type { DestinationMapProps } from "@/utils/interfaces/destination-props";
import { Marker } from "@react-google-maps/api";

export default function DestinationMap({destination, marker_pin}: DestinationMapProps) {
  
  return (
    <Marker 
      position={destination}
      options={{
        icon: {
          url: `/${marker_pin}.png`,
          scaledSize: new google.maps.Size(70, 70),
          anchor: new google.maps.Point(40, 40),
        },
      }}
    />
  )
}
