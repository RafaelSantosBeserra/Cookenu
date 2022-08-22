import React, { useState } from "react";
import { InputsContainer, LoginFormContainer } from "./styled";
import { Button, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import {login} from "../../services/user";
import {useNavigate} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

const LoginForm = ({setRightbuttonText}) => {
  const navigate = useNavigate();
  const { form, onChange, clear} = useForm({email: "", password: ""})
  const [isLoading, setIsloading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate, setRightbuttonText, setIsloading)
    // console.log("Formulário enviado");
    // console.log(form)
  }

  return ( 
      <LoginFormContainer>

        <form onSubmit={onSubmitForm}>
          <InputsContainer>
            <TextField 
              name="email"
              value={form.email}
              onChange={onChange}
              label="E-mail"
              fullWidth
              margin="normal"
              required
              type={"email"}
            />

            <TextField 
              name="password"
              value={form.password}
              onChange={onChange}
              label="Senha"
              fullWidth
              margin="normal"
              required
              type={"password"}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
            > 
            {isLoading ? < CircularProgress color="inherit"/> : <>Fazer Login</>}</Button>
          </InputsContainer>
        </form>
      </LoginFormContainer>
  );
}

export default LoginForm;