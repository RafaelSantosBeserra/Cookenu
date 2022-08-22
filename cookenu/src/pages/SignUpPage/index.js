import React from "react";
import { LogoImage, ScreenContainer } from "./styled";
import logo from "../../assents/logo.png";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = ({setRightbuttonText}) => {
  useUnprotectedPage();
  
  return ( 
    <ScreenContainer>
      <LogoImage src={logo}/>
      
      <SignUpForm setRightbuttonText={setRightbuttonText}/>
      
    </ScreenContainer>
  );
}

export default SignUpPage;