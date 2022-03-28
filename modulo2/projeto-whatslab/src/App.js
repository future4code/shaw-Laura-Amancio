import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Conversa = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  border: solid 1px black;
  /* background-image: url(https://i.pinimg.com/originals/23/32/8e/23328ecab89030003d2c50b20c10f37e.jpg); */
  background-color: #f0ece4;
  padding: 5px;
  height: 700px;
  width: 500px;
`;

const Send = styled.div`
  display: flex;
  align-items: flex-end;
  width: 500px;
  justify-content: space-between;

  button {
    color: white;
    background-color: #25d366;
    border-radius: 10%;
    border-color: #25d366;
  }

  .inputUsuario {
    width: 100px;
  }

  .inputMensagem {
    width: 300px;
  }
`;

export class App extends React.Component {
  state = {
    usuario: "",
    mensagem: "",
    mensagemEnviada: [],
  };

  onChangeUsuario = (event) => {
    this.setState({ usuario: event.target.value });
  };

  onChangeMensagem = (event) => {
    this.setState({ mensagem: event.target.value });
  };

  onClickMensagem = () => {
    const novaMensagem = {
      usuario: this.state.usuario,
      mensagem: this.state.mensagem,
    };
    const novoArrayMensagem = [...this.state.mensagemEnviada];
    novoArrayMensagem.push(novaMensagem);

    this.setState({ mensagemEnviada: novoArrayMensagem });
    this.setState({ usuario: "" });
    this.setState({ mensagem: "" });
  };

  render() {
    const renderizaNaTela = this.state.mensagemEnviada.map((mensagem) => {
      return (
        <p>
          <strong>{mensagem.usuario}</strong>: {mensagem.mensagem}
        </p>
      );
    });

    return (
      <Main>
        <Conversa>{renderizaNaTela}</Conversa>
        <Send>
          <input
            className="inputUsuario"
            value={this.state.usuario}
            onChange={this.onChangeUsuario}
            type="text"
            placeholder="Usuário"
          />

          <input
            className="inputMensagem"
            value={this.state.mensagem}
            onChange={this.onChangeMensagem}
            type="text"
            placeholder="Mensagem"
          />
          <button onClick={this.onClickMensagem}>Enviar</button>
        </Send>
      </Main>
    );
  }
}

export default App;
