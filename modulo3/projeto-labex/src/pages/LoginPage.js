import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/cordinators";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../constants/constants";
import styled from "styled-components";

const Button = styled.button`
  width: 8vw;
  height: 3vh;
  font-size: medium;
  background-color: #260729;
  color: #ebdfcc;
  margin: 8px;

  :hover {
    background-color: #2a2344;
    cursor: pointer;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2{
    color: #2a2344;
    margin: 20px;
  }

  input{
    margin: 10px;
    height: 30px;
  };
`

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: senha,
    };
    axios.post(`${baseUrl}laura-amancio-shaw/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        navigate("/admin/trips/list")
    })
    .catch((err) => {
        console.log(`deu errado:`, err.response)
    })
  };

  return (
    <Main>
      <h2>Login Page</h2>
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
        required
      />
      <input
        placeholder="senha"
        type="password"
        value={senha}
        onChange={onChangeSenha}
        required
      />
      <Button onClick={onSubmitLogin}>Login</Button>
      <Button onClick={() => goBack(navigate)}>Voltar</Button>
    </Main>
  );
};

export default LoginPage;
