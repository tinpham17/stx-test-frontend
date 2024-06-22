import { styled, Box } from "@mui/material"

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
    height: "50px",
    backgroundColor: "#ffe6c4",
  }
}))

export const Container = styled(Box)(({ theme }) => ({
  height: "100%",
  maxWidth: theme.breakpoints.values.lg,
  margin: "auto",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
  paddingLeft: theme.spacing(22),
}))
