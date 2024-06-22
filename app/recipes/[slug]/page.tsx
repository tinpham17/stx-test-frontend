import { Metadata } from "next"
import { Recipe } from "@/types"
import { DATA_RECIPES } from "@/data/recipes"
import { RecipeDetails } from "@/components/RecipeDetails"

interface Params {
  slug: string
}

interface RecipePageProps {
  params: Params
}

async function getRecipe(slug: string): Promise<Recipe> {
  const recipe = await new Promise<Recipe | undefined>((resolve) => {
    setTimeout(() => {
      const recipe = DATA_RECIPES.find((recipe) => recipe.slug === slug)
      resolve(recipe)
    }, 100)
  })
  if (!recipe) {
    throw new Error("Not found")
  }
  return recipe
}

export async function generateStaticParams(): Promise<Params[]> {
  const recipes = await new Promise<Recipe[]>((resolve) => {
    setTimeout(() => {
      resolve(DATA_RECIPES)
    }, 100)
  })
  return recipes.map((recipe) => ({
    slug: recipe.slug
  }))
}

export async function generateMetadata({ params }: { params: Params}): Promise<Metadata> {
  const recipe = await getRecipe(params.slug)
  return {
    title: recipe.title,
    description: recipe.description,
  }
}

export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = await getRecipe(params.slug)

  return (
    <RecipeDetails
      recipe={recipe}
    />
  )
}
