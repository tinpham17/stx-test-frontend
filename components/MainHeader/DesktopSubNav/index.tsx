import { FC } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Box, Typography } from "@mui/material"
import { NAV_SUB_MENU_ITEMS_MAP } from "@/constants"
import { Wrapper, Container } from "./index.styled"

export interface DesktopNavProps {}

export const DesktopSubNav: FC<DesktopNavProps> = () => {
  const pathname = usePathname()

  return (
    <Wrapper>
      <Container>
        {NAV_SUB_MENU_ITEMS_MAP[pathname]?.map((item, index) => (
          <Box key={index}>
            <Link href={item.url}>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </Typography>
            </Link>
          </Box>
        ))}
      </Container>
    </Wrapper>
  )
}
