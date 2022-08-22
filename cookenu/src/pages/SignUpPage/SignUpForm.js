import React, { useState } from "react";
import { InputsContainer } from "./styled";
import { Button, CircularProgress, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import { singUp } from "../../services/user";
import {useNavigate} from "react-router-dom"

const SignUpForm = ({setRightbuttonText}) => {
  const navigate = useNavigate()
  const { form, onChange, clear } = useForm({name: "", email: "", password: ""})
  const [isLoading, setIsloading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault();
    singUp(form, clear, navigate, setRightbuttonText, setIsloading)
    // console.log("Formulário enviado");
    // console.log(form)
  }

  return ( 
      <InputsContainer>
        <form onSubmit={onSubmitForm}>

          <TextField 
            name="name"
            value={form.name}
            onChange={onChange}
            label="Nome"
            fullWidth
            margin="normal"
            required
          />
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
          {isLoading ? <CircularProgress color="inherit"/> : <>Cadastrar</>} </Button>
        </form>
      </InputsContainer>
  );
}

export default SignUpForm;