import { styled, Box } from "@mui/material"

export const Wrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: theme.spacing(1),
  width: 100,
  height: 100,
  marginTop: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    width: 110,
    height: 110,
  }
}))
