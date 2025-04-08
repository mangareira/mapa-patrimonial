"use client"
import { createContext, useState, type ReactNode } from "react";
import type { ContextInfoProps } from "../interfaces/context-info-props";

const ContextInfo = createContext<ContextInfoProps>({
  onClose: () => {},
  onOpen: () => {},
  isOpenView: false,
  isOpenCreate: false
})

export const ContextInfoProvider = ({children}: {children: ReactNode}) => {
  const [isOpenView, setIsOpenView] = useState(false);
  const [isOpenCreate, setIsOpenCreate] = useState(false);

  const onOpen = (type: "view" | "select") => {
    switch (type) {
      case "view":
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
      isOpenCreate
    }}>
      {children}
    </ContextInfo.Provider>
  )
}

export default ContextInfo