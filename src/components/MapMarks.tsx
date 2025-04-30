import { GoogleMap } from "@react-google-maps/api";
import Marks from "./Marks/marks";
import { useGoogle } from "@/utils/hooks/useGoogle";


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

export default function MapMarks() {
  const { containerStyle, isLoaded } = useGoogle()

  const marks = [
    {
      position: {lat: -5.505111, lng: -45.252024},
      name: "Cachoeira do dede",
      marker_pin: "logo-1"
    },
  ];
  
  const center = {
    lat: -5.5077356,
    lng: -45.2444862
  }
  return isLoaded ? (
    <div className="relative h-full">
      <div className="bg-cyan-200 h-full">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={mapOptions}
        >
          {marks.map((mark) => (
            <Marks 
              name={mark.name} 
              key={mark.name} 
              position={mark.position}
              marker_pin={mark.marker_pin}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  ) : <></>
}
