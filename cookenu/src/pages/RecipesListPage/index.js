import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import {BASE_URL} from "../../constants/urls"
import CardRecipeList from "../../components/RecipeCard/RecipeCard";
import { AddRecipeButton, RecipeListContainer } from "./styled";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { goToAddRecipes, goToRecipesDetail } from "../../routes/coordinator";
import Loading from "../../components/Loading/Loading";

const RecipesListPage = () => {
  const navigate = useNavigate()
  useProtectedPage()

  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
  console.log(recipes)

  const onClickCard = (id) => {
    goToRecipesDetail(navigate, id)
  }

  const recipeCards = recipes.map((recipe) => {

    return (
      <CardRecipeList 
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)}
      />
    )
  })
  return ( 
    <RecipeListContainer>
      {recipeCards.length > 0 ? recipeCards : <Loading />}
      <AddRecipeButton
        color="primary"
        onClick={() => goToAddRecipes(navigate)}
      >
        <AddIcon />
      </AddRecipeButton>
    </RecipeListContainer>
  );
}

export default RecipesListPage;