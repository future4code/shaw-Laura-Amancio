import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3px;
  }

  label input{
    margin-top: 5px;
  }

  label select{
    margin-top: 5px;
  }
`

export default class Etapa1 extends React.Component {
  render() {
    return (
      <Main>
        <h2>ETAPA 1 - Dados Gerais</h2>
        <label>
          1. Qual seu nome?
          <input></input>
        </label>
        <label>
          2. Qual sua idade?
          <input></input>
        </label>
        <label>
          3. Qual seu email?
          <input></input>
        </label>
        <label>
          4. Qual seu grau de escolaridade?
          <select>
            <option>Ensino Médio Completo</option>
            <option>Ensino Superior Incompleto</option>
            <option>Ensino Superior Completo</option>
            <option>Ensino Médio Incompleto</option>
          </select>
        </label>
      </Main>
    );
  }
}
