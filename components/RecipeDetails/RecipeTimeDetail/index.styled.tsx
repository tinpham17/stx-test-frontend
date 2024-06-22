import { styled, Box } from "@mui/material"

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3)
}))
