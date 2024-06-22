import { FC } from "react"
import { Wrapper } from "./index.styled"
import { Box, Typography } from "@mui/material"
import { ChevronRight } from "@mui/icons-material"

export interface RecipeCategoryBreadcrumbProps {
  categories: string[]
}

export const RecipeCategoryBreadcrumb: FC<RecipeCategoryBreadcrumbProps> = ({ categories }) => {
  return (
    <Wrapper>
      {["Recipes", ...categories].map((item) => (
        <Box
          key={item}
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: 600
            }}
          >
            {item}
          </Typography>
          <ChevronRight sx={{
            fontSize: "16px",
            path: {
              color: "#da1a32"
            }
          }}
          />
        </Box>
      ))}
    </Wrapper>
  )
}
