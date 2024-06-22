import { Box, styled } from "@mui/material"

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column-reverse",
  gap: theme.spacing(3),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    // gap: theme.spacing(6),
  }
}))

export const RecipeImageBox = styled(Box)(({ theme }) => ({
  position: "relative",
  flex: "none",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  }
}))

export const RecipeDetailBox = styled(Box)(({ theme }) => ({
  position: "relative",
  flex: "none",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  }
}))
