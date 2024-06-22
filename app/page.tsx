import { ROUTES } from "@/constants"
import { Box } from "@mui/material"
import Link from "next/link"

export default function HomePage() {
  return (
    <Box>
      <Box>To view recipes:</Box>
      <Box component="ul" sx={{ pt: 3, pl: 3 }}>
        <Box component="li">
          Click <strong>Recipes</strong> from the top header
        </Box>
        <Box component="li">
          Or <Link href={ROUTES.RECIPES}>click here</Link>
        </Box>
      </Box>
    </Box>
  )
}
