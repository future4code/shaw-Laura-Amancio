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

export default class Etapa3 extends React.Component {
    render() {
      return (

        <Main>
            <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
            <label>
                7. Por que você não terminou um curso de graduação?
                <input></input>
            </label>
            <label>
                8. Você fez algum curso complementar?
                <select>
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                </select>
            </label>
        </Main>
      )}
}