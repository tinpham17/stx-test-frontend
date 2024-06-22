import { FC } from "react"
import { Recipe } from "@/types"
import { Grid, Typography } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import { ROUTES } from "@/constants"

export interface RecipeListProps {
  recipes: Recipe[]
}

export const RecipeList: FC<RecipeListProps> = ({ recipes }) => {
  return (
    <Grid container spacing={3}>
      {recipes.map((recipe) => (
        <Grid item key={recipe.id} xs={6} sm={4} md={3}>
          <Link href={`${ROUTES.RECIPES}/${recipe.slug}`}>
            <Image
              src={recipe.imageUrl}
              alt="Recipe Image"
              width="0"
              height="0"
              style={{
                width: "100%",
                height: "auto"
              }}
            />
            <Typography
              component="h4"
              variant="subtitle1"
            >
              {recipe.title}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
