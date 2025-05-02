export type RouteToDestinationProps = {
  text: string
  className?: string
} & RouteToDestinationMapProps

export type RouteToDestinationMapProps = {
  type: "visualizer" | "select"
  position: {
    lat: number
    lng: number
  }
  marker_pin?: string
  onSelect: (position: google.maps.LatLngLiteral) => void
}