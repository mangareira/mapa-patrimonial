import type { ReactNode } from "react";

export default function PagesLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <div className="h-screen">
      {children}
    </div>
  )
}