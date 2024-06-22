import type { Metadata } from "next"
import { ReactNode } from "react"
import "./globals.css"
import { MainLayout } from "@/components/MainLayout"

export const metadata: Metadata = {
  title: "Bakery Company",
  description: "Recipes from Bakery Company",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
