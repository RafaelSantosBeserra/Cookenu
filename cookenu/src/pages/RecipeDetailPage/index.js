import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { RecipeImage, ScreenContainer, RecipeContainer } from "./styled";
import Loading from "../../components/Loading/Loading";

const RecipeDetailPage = () => {
  useProtectedPage()
  const parmas = useParams()
  // console.log(parmas)

  const recipe = useRequestData([], `${BASE_URL}/recipe/${parmas.id}`)[0]
  console.log(recipe)

  return ( 
    <ScreenContainer>
      {recipe ? 
      <RecipeContainer>
        <RecipeImage src={recipe.image}/>
        <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{recipe.title}</Typography>
        <Typography align="center">{recipe.description} </Typography>
      </RecipeContainer>
      :
      <Loading />
      }
    </ScreenContainer>
  );
}

export default RecipeDetailPage;