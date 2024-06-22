import { FC } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Box, Typography } from "@mui/material"
import { NAV_MENU_ITEMS } from "@/constants"
import { Wrapper } from "./index.styled"

export interface DesktopNavProps {}

export const DesktopNav: FC<DesktopNavProps> = () => {
  const pathname = usePathname()

  return (
    <Wrapper>
      {NAV_MENU_ITEMS.map((item) => (
        <Box key={item.url}>
          <Link href={item.url}>
            <Typography
              variant="overline"
            >
              {item.label}
            </Typography>
            <Box
              sx={{
                height: "1px",
                bgcolor: item.url === pathname ? "#943f18" : "transparent"
              }}
            />
          </Link>
        </Box>
      ))}
    </Wrapper>
  )
}
