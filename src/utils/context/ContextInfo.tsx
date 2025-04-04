"use client"
import { createContext, useState, type ReactNode } from "react";
import type { ContextInfoProps } from "../interfaces/context-info-props";

const ContextInfo = createContext<ContextInfoProps>({
  onClose: () => {},
  onOpen: () => {},
  isOpen: false
})

export const ContextInfoProvider = ({children}: {children: ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <ContextInfo.Provider value={{
      onClose,
      isOpen,
      onOpen
    }}>
      {children}
    </ContextInfo.Provider>
  )
}

export default ContextInfo