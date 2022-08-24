import React from "react";
import logo from "../../assets/logo.png";
import { MainContainer } from "./styled";
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/UseUnprotectedPage"

const LoginPage = ({setRightButtonText}) => {
  useUnprotectedPage()
  const navigate = useNavigate()
  return (
    <MainContainer>
      <img src={logo} alt="Logo do Ministério da Magia" />
      <h2>Enquetes.LA</h2>
      <LoginForm setRightButtonText={setRightButtonText}/>
      <Button
        onClick={() => goToSignUpPage(navigate)}
        type={"submit"}
        fullWidth
        variant={"text"}
        color={"primary"}
      >
        Não possui uma conta? Cadastre-se aqui
      </Button>
    </MainContainer>
  );
};

export default LoginPage;
