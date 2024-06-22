import { RecipeList } from "@/components/RecipeList"
import { ROUTES } from "@/constants"
import { DATA_RECIPES } from "@/data/recipes"
import { Recipe } from "@/types"
import { Grid, Typography } from "@mui/material"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

async function getRecipes(): Promise<Recipe[]> {
  const recipes = await new Promise<Recipe[]>((resolve) => {
    setTimeout(() => {
      resolve(DATA_RECIPES)
    }, 100)
  })
  return recipes
}

export const metadata: Metadata = {
  title: "Recipes | Bakery Company",
  description: "Recipes from Bakery Company",
}

export default async function RecipesPage() {
  const recipes = await getRecipes()

  return (
    <RecipeList
      recipes={recipes}
    />
  )
}
