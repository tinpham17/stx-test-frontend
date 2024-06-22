import { styled, Box } from "@mui/material"

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "block",
  position: "absolute",
  top: theme.spacing(2),
  right: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    display: "none",
    right: theme.spacing(3)
  }
}))
