export type RouteToDestinationProps = {
  text: string
  className?: string
} & RouteToDestinationMapProps

export type RouteToDestinationMapProps = {
  type: "visualizer" | "select"
}