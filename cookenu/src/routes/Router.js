import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import AddRecipesPage from "../pages/AddRecipesPage";
import RecipeDetailPage from "../pages/RecipeDetailPage";
import RecipesListPage from "../pages/RecipesListPage";
import SignUpPage from "../pages/SignUpPage";
import ErrorPage from "../pages/ErrorPage";

const Router = ({setRightbuttonText}) => {
  return (
      <Routes>
        <Route path="/" element={<RecipesListPage />} />
        <Route path="/login" element={<LoginPage setRightbuttonText={setRightbuttonText}/>} />
        <Route path="/cadastro" element={<SignUpPage setRightbuttonText={setRightbuttonText}/>} />
        <Route path="/adicionar-receita" element={<AddRecipesPage />} />
        <Route path="/detalhe/:id" element={<RecipeDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  );
};

export default Router;
