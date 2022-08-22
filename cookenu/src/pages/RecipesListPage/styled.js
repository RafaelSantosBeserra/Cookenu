import { Fab } from "@mui/material"
import styled from "styled-components"

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5vh;
`

export const AddRecipeButton = styled(Fab)`
    position: fixed !important;
    right: 10px;
    bottom: 20px;
    z-index: 3;
`