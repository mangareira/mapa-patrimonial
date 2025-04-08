export type ContextInfoProps = {
  isOpenView: boolean
  isOpenCreate: boolean
  onOpen: (type: "view" | "select") => void
  onClose: (type: "view" | "select") => void
}