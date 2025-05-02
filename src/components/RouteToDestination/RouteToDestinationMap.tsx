import { useGoogle } from "@/utils/hooks/useGoogle";
import type { RouteToDestinationMapProps } from "@/utils/interfaces/route-to-destination-props";
import { GoogleMap } from "@react-google-maps/api";
import DestinationMap from "../DestinationMap/DestinationMap";
import SelectLocal from "../SelectLocal/SelectLocal";

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

export default function RouteToDestinationMap({type, position, marker_pin, onSelect}: RouteToDestinationMapProps) {
  const {containerStyle, isLoaded, selectedPosition, setSelectedPosition } = useGoogle()
  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (type === "select" && e.latLng) {
      const newPos = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      setSelectedPosition(newPos);
      onSelect?.(newPos)
    }
  };

  return isLoaded ? (
    <div className="flex items-center justify-center bg-cyan-300 flex-2/1 rounded-t-3xl">
      <GoogleMap
        center={position}
        mapContainerStyle={containerStyle}
        zoom={13}
        options={mapOptions}
        onClick={handleMapClick}
      >
        {type === "visualizer" && <DestinationMap destination={position} marker_pin={marker_pin || ""}/>}
        {type === "select" && <SelectLocal
          selectedPosition={selectedPosition || position}
        />}
      </GoogleMap>
    </div>
  ) : <></>
}
