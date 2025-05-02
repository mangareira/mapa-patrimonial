import type { SelectLocalProps } from "@/utils/interfaces/select-local-props";
import { Marker } from "@react-google-maps/api";
import { useEffect, useRef } from "react";

export default function SelectLocal({ selectedPosition}: SelectLocalProps) {
  const markerRef = useRef<google.maps.Marker | null>(null);
  
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setPosition(selectedPosition);
    }
  }, [selectedPosition]);
  
  return (
    <>
      <Marker
        onLoad={(marker) => {
          markerRef.current = marker;
        }}
        onUnmount={() => {
          markerRef.current = null;
        }}
        position={selectedPosition}
        draggable={true}
        onDragEnd={(e) => {
          if (e.latLng) {
            const newPosition = {
              lat: e.latLng.lat(),
              lng: e.latLng.lng()
            };
            markerRef.current?.setPosition(newPosition);
          }
        }}
        options={{
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: "#039FAA",
            fillOpacity: 1,
            strokeColor: "#FFFFFF",
            strokeWeight: 2
          }
        }}
      />
    </>
  )
}
