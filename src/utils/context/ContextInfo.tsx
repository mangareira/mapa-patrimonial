"use client"
import { createContext, useState, type ReactNode } from "react";
import type { ContextInfoProps } from "../interfaces/context-info-props";

const ContextInfo = createContext<ContextInfoProps>({
  id: "",
  onClose: () => {},
  onOpen: () => {},
  isOpenView: false,
  isOpenCreate: false,
})

export const ContextInfoProvider = ({children}: {children: ReactNode}) => {
  const [isOpenView, setIsOpenView] = useState(false);
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [id, setId] = useState<string | undefined>("")

  const onOpen = (type: "view" | "select", id?: string) => {
    switch (type) {
      case "view":
        setId(id)
        setIsOpenView(true);
        break;
      case "select":
        setIsOpenCreate(true);
        break;
    }
  }
  const onClose = (type: "view" | "select") => {
    switch (type) {
      case "view":
        setIsOpenView(false);
        break;
      case "select":
        setIsOpenCreate(false);
        break;
    }
  }
  return (
    <ContextInfo.Provider value={{
      onClose,
      onOpen,
      isOpenView,
      isOpenCreate,
      id,
    }}>
      {children}
    </ContextInfo.Provider>
  )
}

export default ContextInfo