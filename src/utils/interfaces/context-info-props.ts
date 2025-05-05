export type ContextInfoProps = {
  id: string
  isOpenView: boolean
  isOpenCreate: boolean
  onOpen: (type: "view" | "select", id: string) => void
  onClose: (type: "view" | "select") => void
}