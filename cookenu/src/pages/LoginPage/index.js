import React from "react";
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled";
import logo from "../../assents/logo.png";
import { Button } from "@mui/material";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({setRightbuttonText}) => {
  useUnprotectedPage()
  const navigate = useNavigate();
  
  return ( 
    <ScreenContainer>
      <LogoImage src={logo}/>
      
      <LoginForm setRightbuttonText={setRightbuttonText}/>
      
      <SignUpButtonContainer>
        <Button onClick={() => goToSignUpPage(navigate)}
          type="submit"
          fullWidth
          variant="text"
        > 
        Não possui conta? Cadastre-se </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
}

export default LoginPage;