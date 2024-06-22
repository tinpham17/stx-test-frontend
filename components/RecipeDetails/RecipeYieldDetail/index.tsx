import { FC } from "react"
import { Wrapper } from "./index.styled"
import { Box, Button, Typography } from "@mui/material"
import { Add, Adjust, Print } from "@mui/icons-material"
import { Recipe } from "@/types"

export interface RecipeYieldDetailProps {
  recipe: Recipe
}

export const RecipeYieldDetail: FC<RecipeYieldDetailProps> = ({ recipe }) => {
  return (
    <Wrapper>
      <Box sx={{ mr: 1 }}>
        <Adjust fontSize="large" />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          Yield
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            width: "100%",
          }}
        >
          {recipe.yield}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 3
        }}
      >
        <Button
          color="error"
          sx={{
            flex: "none"
          }}
          startIcon={<Add/>}
          variant="outlined"
        >
          Save Recipe
        </Button>
        <Button
          color="error"
          sx={{
            flex: "none"
          }}
          startIcon={<Print/>}
          variant="outlined"
        >
          Print
        </Button>
      </Box>
    </Wrapper>
  )
}
