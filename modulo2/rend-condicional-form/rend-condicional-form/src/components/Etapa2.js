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
`

export default class Etapa2 extends React.Component {
    render() {
      return (
          <Main>
            <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            <label>
                5. Qual curso?
                <input></input>
            </label>
            <label>
                6. Qual unidade de Ensino?
                <input></input>
            </label>
          </Main>
      )}
    }