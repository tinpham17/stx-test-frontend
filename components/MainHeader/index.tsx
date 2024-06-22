import { FC } from "react"
import { Container } from "@mui/material"
import { Logo } from "./Logo"
import { MobileNav } from "./MobileNav"
import { DesktopNav } from "./DesktopNav"
import { DesktopSubNav } from "./DesktopSubNav"
import { PrimaryBar, Wrapper } from "./index.styled"

export interface MainHeaderProps {}

export const MainHeader: FC<MainHeaderProps> = () => {
  return (
    <Wrapper>
      <PrimaryBar>
        <Logo/>
        <MobileNav/>
        <DesktopNav/>
      </PrimaryBar>
      <DesktopSubNav/>
    </Wrapper>
  )
}
