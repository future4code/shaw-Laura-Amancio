import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
`;

export default class App extends React.Component {
  state = {
    pagina: 1, //pq? pq vc vai contando com o +1 alí e fica mais fácil ir mudando de pagina.
    // trabalhar com numeros nesse caso é bem mais fácil, por poder navegar contando.
  };

  irProximaEtapa = () => {
    this.setState({ pagina: this.state.pagina + 1 });
  };

  //jeito "errado" e que daria maior trampo:

  // irEtapa1 = () => {
  //   this.setState({ pagina: "etapa1" });
  // };
  // irEtapa2 = () => {
  //   this.setState({ pagina: "etapa2" });
  // };
  // irEtapa3 = () => {
  //   this.setState({ pagina: "etapa3" });
  // };
  // irEtapaFinal = () => {
  //   this.setState({ pagina: "final" });
  // };

  render() {
    let renderizaTela;

    switch (this.state.pagina) {
      case 1:
        renderizaTela = <Etapa1 />;
        break;
      case 2:
        renderizaTela = <Etapa2 />;
        break;
      case 3:
        renderizaTela = <Etapa3 />;
        break;
      default:
        renderizaTela = <Final />;
        break;
    }

    return (
      <Main>
        {renderizaTela}
        <nav>
          {this.state.pagina !== 4 && (
            <button onClick={this.irProximaEtapa}>Próxima Etapa</button>
          )}
        </nav>
      </Main>
    );
  }
}
