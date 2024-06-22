import { IconButton, Menu, MenuItem, Typography } from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"
import { FC, useState } from "react"
import { NAV_MENU_ITEMS } from "@/constants"
import { Wrapper } from "./index.styled"
import { useRouter } from "next/navigation"
import { Route } from "@/types"

export interface MobileNavProps {}

export const MobileNav: FC<MobileNavProps> = () => {
  const router = useRouter()
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget)
  }

  const handleClickMenuItem = (item: Route) => {
    router.push(item.url)
    setMenuAnchorEl(null)
  }

  return (
    <Wrapper>
      <IconButton
        size="large"
        aria-label="menu"
        aria-controls="mobile-menu"
        aria-haspopup="true"
        onClick={handleOpenMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="mobile-menu"
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        keepMounted
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={() => setMenuAnchorEl(null)}
      >
        {NAV_MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.url}
            onClick={() => handleClickMenuItem(item)}
          >
            <Typography
              variant="subtitle2"
              sx={{
                textTransform: "uppercase"
              }}
            >
              {item.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  )
}
