import type {ReactNode } from "react"

export type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  className?: string
  type?: "submit" | "reset" | "button"
  disable?: boolean 
}