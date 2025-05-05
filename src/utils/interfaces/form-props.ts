export type FormProps = {
  location: google.maps.LatLngLiteral
  name: string
  description: string
  photos: { url: string }[]
  instructions: string
  visitHour: string
  weekend: "yes" | "no"
}