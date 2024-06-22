import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { ROUTES } from "@/constants"
import { Wrapper } from "./index.styled"

export interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return (
    <Wrapper>
      <Link
        href={ROUTES.HOME}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          fill
        />
      </Link>
    </Wrapper>
  )
}
