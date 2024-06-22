import { Route } from "@/types"

export const ROUTES = {
  HOME: "/",
  RECIPES: "/recipes",
  LEARN: "/learn",
  ABOUT: "/about",
  BLOG: "/blog",
}

export const NAV_MENU_ITEMS: Route[] = [
  {
    url: ROUTES.HOME,
    label: "Shop",
  },
  {
    url: ROUTES.RECIPES,
    label: "Recipes",
  },
  {
    url: ROUTES.LEARN,
    label: "Learn",
  },
  {
    url: ROUTES.ABOUT,
    label: "About",
  },
  {
    url: ROUTES.BLOG,
    label: "Blog",
  }
]

export const NAV_SUB_MENU_ITEMS_MAP: Record<string, Route[]> = {
  [ROUTES.RECIPES]: [
    {
      url: ROUTES.HOME,
      label: "Categories"
    },
    {
      url: ROUTES.HOME,
      label: "Collections"
    },
    {
      url: ROUTES.HOME,
      label: "Resources"
    }
  ]
}
