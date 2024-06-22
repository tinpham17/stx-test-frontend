import { Box, styled } from "@mui/material"

export const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: "110px",
  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    marginTop: "130px"
  }
}))
