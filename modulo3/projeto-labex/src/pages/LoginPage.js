import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/cordinators";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../constants/constants";

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
    <div>
      <h2>Login Page</h2>
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />
      <input
        placeholder="senha"
        type="password"
        value={senha}
        onChange={onChangeSenha}
      />
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={onSubmitLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
