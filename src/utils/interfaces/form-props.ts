export type FormProps = {
  location: string
  name: string
  description: string
  photos: { url: string }[]
  instrutions: string
  visitHour: string
  weekend: "yes" | "no"
}