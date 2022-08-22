import { ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Router from "./routes/Router";
import theme from "./constants/theme";
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom"

function App() {
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightbuttonText] = useState(
    token ? "Logout" : "Login"
  );
  return ( 
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightbuttonText={setRightbuttonText} />
        <Router setRightbuttonText={setRightbuttonText}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
