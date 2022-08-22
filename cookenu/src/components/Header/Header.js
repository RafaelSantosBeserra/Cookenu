import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { StyledToolbar } from "./styled";
import { goToRecipesList } from "../../routes/coordinator";
import { goToLoginPage } from "../../routes/coordinator";

const Header = ({rightButtonText, setRightbuttonText}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token")
  };

  const rightButtonAction = () => {
    if (token) {
      logout()
      setRightbuttonText("Login")
      goToLoginPage(navigate)
    } else {
      goToLoginPage(navigate)
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Button
            onClick={() => goToRecipesList(navigate)}
            variant="h6"
            component="div"
          >Cookenu</Button>

          <Button onClick={rightButtonAction} color="inherit">
            {rightButtonText}
          </Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
