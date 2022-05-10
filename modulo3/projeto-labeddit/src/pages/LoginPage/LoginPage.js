import React from "react";
import logo from "../../assets/logo-labeddit.png";
import { MainContainer, CardImg } from "./styledLogin";
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToCadastroPage } from "../../routes/condinators";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

const LoginPage = ({setRightButton}) => {
  const navigate = useNavigate();
  useUnprotectedPage();

  return (
    <MainContainer>
      <CardImg>
        <img src={logo} alt={"logo da labeddit"} />
      </CardImg>
      <LoginForm setRightButton={setRightButton}/>
      <Button
        variant="text"
        color="primary"
        onClick={() => goToCadastroPage(navigate)}
      >
        Não pussui uma conta? Cadastre-se agora!
      </Button>
    </MainContainer>
  );
};

export default LoginPage;
