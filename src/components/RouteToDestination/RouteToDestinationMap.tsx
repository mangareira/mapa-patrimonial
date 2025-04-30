import { useGoogle } from "@/utils/hooks/useGoogle";
import type { RouteToDestinationMapProps } from "@/utils/interfaces/route-to-destination-props";
import { GoogleMap } from "@react-google-maps/api";
import DestinationMap from "../DestinationMap/DestinationMap";

const mapStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  },
];

const mapOptions = {
  styles: mapStyles,
  streetViewControl: false,
  mapTypeControl: false,
  zoomControl: false,
  fullscreenControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scaleControl: false
};

export default function RouteToDestinationMap({type, position}: RouteToDestinationMapProps) {
  const {containerStyle, isLoaded, location} = useGoogle()

  return isLoaded ? (
    <div className="flex items-center justify-center bg-cyan-300 flex-2/1 rounded-t-3xl">
      <GoogleMap
        center={position}
        mapContainerStyle={containerStyle}
        zoom={13}
        options={mapOptions}
      >
        {type === "visualizer" && <DestinationMap origin={location} destination={position} />}
      </GoogleMap>
    </div>
  ) : <></>
}
