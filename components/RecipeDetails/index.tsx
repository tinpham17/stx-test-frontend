"use client"

import { FC } from "react"
import Image from "next/image"
import { Recipe } from "@/types"
import { Typography } from "@mui/material"
import { RecipeCategoryBreadcrumb } from "./RecipeCategoryBreadcrumb"
import { RecipeTimeDetail } from "./RecipeTimeDetail"
import { RecipeYieldDetail } from "./RecipeYieldDetail"
import { RecipeImageBox, RecipeDetailBox, Wrapper } from "./index.styled"

export interface RecipeDetailsProps {
  recipe: Recipe
}

export const RecipeDetails: FC<RecipeDetailsProps> = ({ recipe }) => {
  return (
    <Wrapper>
      <RecipeDetailBox>
        <RecipeCategoryBreadcrumb
          categories={recipe.categories}
        />
        <Typography
          component="h2"
          sx={{
            fontSize: "46px",
            marginY: "20px",
          }}
        >
          {recipe.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400
          }}
        >
          {recipe.description}
        </Typography>
        <RecipeTimeDetail
          recipe={recipe}
        />
        <RecipeYieldDetail
          recipe={recipe}
        />
      </RecipeDetailBox>
      <RecipeImageBox>
        <Image
          src={recipe.imageUrl}
          alt="Recipe image"
          width="0"
          height="0"
          style={{
            width: "100%",
            height: "auto"
          }}
        />
      </RecipeImageBox>
    </Wrapper>
  )
}
