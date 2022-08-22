import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import error from "../../assents/error.png";
import {ErrorPageContainer, ErrorImage} from "./styled";
import Typography from '@mui/material/Typography'

const ErrorPage = () => {
  useProtectedPage()
  return ( 
    <ErrorPageContainer>
      <ErrorImage src={error}/>
      <Typography
      color={'primary'}
      variant={'h4'}
      align={'center'}>
        Erro 404 - Página Não Encontrada</Typography>
    </ErrorPageContainer>
  );
}

export default ErrorPage;