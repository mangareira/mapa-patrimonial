import MapData from "@/components/MapData/MapData";
import { ContextInfoProvider } from "@/utils/context/ContextInfo";
import type { ReactNode } from "react";

export default function PagesLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <ContextInfoProvider>
      <div className="h-screen">
        <MapData />
        {children}
      </div>
    </ContextInfoProvider>
  )
}