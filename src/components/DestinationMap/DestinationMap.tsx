import { useDestination } from "@/utils/hooks/useDestination";
import type { DestinationMapProps } from "@/utils/interfaces/destination-props";
import { DirectionsRenderer, DirectionsService } from "@react-google-maps/api";

export default function DestinationMap({origin, destination}: DestinationMapProps) {
  
  const {directionsCallback, directionsResponse} = useDestination()

  return (
    <>
      {origin && destination && (
        <DirectionsService 
          options={{
            destination,
            origin,
            travelMode: google.maps.TravelMode.DRIVING
          }}
          callback={directionsCallback}
        />
      )}
      {directionsResponse && (
        <DirectionsRenderer 
          options={{
            directions: directionsResponse,
            preserveViewport: true
          }}
        />
      )}
    </>
  )
}
