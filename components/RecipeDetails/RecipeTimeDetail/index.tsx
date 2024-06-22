import { FC } from "react"
import { Wrapper } from "./index.styled"
import { Box, Typography } from "@mui/material"
import { AccessTime, ChevronRight } from "@mui/icons-material"
import { Recipe } from "@/types"

export interface RecipeTimeDetailProps {
  recipe: Recipe
}

export const RecipeTimeDetail: FC<RecipeTimeDetailProps> = ({ recipe }) => {
  return (
    <Wrapper>
      <Box sx={{ mr: 1 }}>
        <AccessTime fontSize="large" />
      </Box>
      <Box
        sx={{
          width: "100%"
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          Prep
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          {recipe.prepTime}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%"
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          Bake
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          {recipe.bakeTime}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%"
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          Total
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          {recipe.totalTime}
        </Typography>
      </Box>
    </Wrapper>
  )
}
