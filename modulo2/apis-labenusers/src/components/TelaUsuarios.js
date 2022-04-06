import React from "react";
import axios from "axios";
import styled from "styled-components";

const MainUsuarios = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ListaUsuarios = styled.li`
    display: flex;
    width: 300px;
    justify-content: space-between;
    margin-top: 10px;
`

const headers = {
  headers: {
    Authorization: "laura-amancio-shaw",
  },
};

export default class TelaUsuarios extends React.Component {
  state = {
    usuarios: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ usuarios: res.data });
      })
      .catch((err) => {
        alert("algo deu errado, não conseguimos achar a lista :(");
      });
  }

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios
      .delete(url, headers)
      .then((res) => {
        alert("Usuário(a) deletado com sucesso!");
        this.getAllUsers();
      })
      .catch((err) => {
        alert("Algo deu errado, tente de novo");
      });
  };

  render() {
    const renderizaListaUsuario = this.state.usuarios.map((usuario) => {
      return (
        <ListaUsuarios key={usuario.id}>
          {usuario.name}
          <button onClick={() => this.deleteUser(usuario.id)}>X</button>
        </ListaUsuarios>
      );
    });
    return (
      <MainUsuarios>
        <button onClick={this.props.irParaCadastro}>Mudar de Página</button>
        <h3>Lista de Usuários</h3>
        {renderizaListaUsuario}
      </MainUsuarios>
    );
  }
}
