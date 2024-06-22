export interface Recipe {
  id: number
  slug: string
  title: string
  description: string
  imageUrl: string
  categories: string[]
  prepTime: string
  bakeTime: string
  totalTime: string
  yield: string
}
