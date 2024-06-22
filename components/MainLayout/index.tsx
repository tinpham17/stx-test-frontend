"use client"

import { FC, ReactNode } from "react"
import { MainHeader } from "@/components/MainHeader"
import { MainBody } from "@/components/MainBody"

export interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <MainHeader/>
      <MainBody>
        {children}
      </MainBody>
    </>
  )
}
