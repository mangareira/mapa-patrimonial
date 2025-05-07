export type ContextInfoProps = {
  id: string | undefined
  isOpenView: boolean
  isOpenCreate: boolean
  onOpen: (type: "view" | "select", id?: string) => void
  onClose: (type: "view" | "select") => void
}