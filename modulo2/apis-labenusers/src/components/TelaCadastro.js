import React from "react";
import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainCadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  input {
    margin: 5px;
  }
`;

const headers = {
  headers: {
    Authorization: "laura-amancio-shaw",
  },
};

toast.configure()

export default class TelaCadastro extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
  };

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };
    axios
      .post(url, body, headers)
      .then((res) => {
        toast.success("Usuário criado com sucesso :)");
        this.setState({
          inputEmail: "",
          inputNome: "",
        });
      })
      .catch((err) => {
        toast.error("Ixi, algo deu errado");
      });
  };

  render() {
    return (
      <MainCadastro>
        <button onClick={this.props.irParaUsuarios}>Mudar de Página</button>
        <h3>Tela Cadastro</h3>
        <nav>
          <input
            placeholder="Nome"
            value={this.state.inputNome}
            onChange={this.onChangeInputNome}
          />
          <input
            placeholder="Email"
            value={this.state.inputEmail}
            onChange={this.onChangeInputEmail}
          />
          <button onClick={this.createUser}>Cadastrar</button>
        </nav>
      </MainCadastro>
    );
  }
}
