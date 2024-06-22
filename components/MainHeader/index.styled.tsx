import { AppBar, Box, styled } from "@mui/material"

export const Wrapper = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: "white",
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  color: "black",
  [theme.breakpoints.up("sm")]: {
    borderBottom: "none"
  }
}))

export const PrimaryBar = styled(Box)(({ theme }) => ({
  height: "80px",
  position: "relative",
  display: "flex",
  justifyContent: "flex-end",
  maxWidth: theme.breakpoints.values.lg,
  width: "100%",
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    justifyContent: "flex-start"
  }
}))
