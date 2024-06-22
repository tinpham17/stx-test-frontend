import { styled, Box } from "@mui/material"

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(6),
    marginLeft: theme.spacing(22),
  }
}))
