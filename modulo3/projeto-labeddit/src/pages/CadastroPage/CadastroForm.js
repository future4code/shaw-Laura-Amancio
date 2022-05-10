import React from "react";
import { TextField, Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { MainContainer } from "./styledCadastro";
import { signUp } from "../../services/users";
import { useNavigate } from "react-router-dom";

const LoginForm = ({setRightButton}) => {
  const navigate = useNavigate()
  const { form, onChange, clear } = useForm({
    email: "",
    password: "",
    username: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, navigate, setRightButton)
  };

  return (
    <MainContainer>
      <h3> Olá, boas vindas ao LabEddit :) </h3>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"username"}
          value={form.username}
          onChange={onChange}
          required
          label="Nome de usuário"
          variant="filled"
          margin="normal"
        />
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
          label="Email"
          type="email"
          variant="filled"
          margin="normal"
        />

        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label="Senha"
          type="password"
          variant="filled"
          margin="normal"
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Cadastrar
        </Button>
      </form>
    </MainContainer>
  );
};

export default LoginForm;
