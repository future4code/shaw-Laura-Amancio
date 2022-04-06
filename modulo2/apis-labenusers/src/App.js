import React from "react";
import TelaCadastro from "./components/TelaCadastro.js";
import TelaUsuarios from "./components/TelaUsuarios.js";

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro",
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaUsuarios={this.irParaUsuarios} />;
      case "lista":
        return <TelaUsuarios irParaCadastro={this.irParaCadastro} />;
      default:
        return "Algo deu errado, página não encontrada :(";
    }
  };

  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro" });
  };

  irParaUsuarios = () => {
    this.setState({ telaAtual: "lista" });
  };

  render() {
    return <div>{this.escolheTela()}</div>;
  }
}
