import { FC, ReactNode } from "react"
import { Container } from "@mui/material"
import { Wrapper } from "./index.styled"

export interface MainBodyProps {
  children: ReactNode
}

export const MainBody: FC<MainBodyProps> = ({ children }) => {
  return (
    <Wrapper
      component="main"
    >
      <Container maxWidth="lg">
        {children}
      </Container>
    </Wrapper>
  )
}
