import { Typography } from "@mui/material";
import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import AddRecipeForm from "./AddRecipeForm";
import { RecipeContainer, ScreenContainer } from "./styled";

const AddRecipesPage = () => {
  useProtectedPage()
  return ( 
    <ScreenContainer>
      <RecipeContainer>
        <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Adicionar Nova Receita</Typography>
        <AddRecipeForm />
      </RecipeContainer>
    </ScreenContainer>
  );
}

export default AddRecipesPage;