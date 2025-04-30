import { useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";

export const useGoogle = () => {
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0
  })

  useEffect(() => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords
            setLocation({
              lat: latitude,
              lng: longitude
            })
          }, () => {
            console.log('Erro to location')
        })
    }
  }, [])
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  })

  const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: "20px 20px 0px 0px"
  };

  return {
    isLoaded,
    containerStyle,
    location
  }
}