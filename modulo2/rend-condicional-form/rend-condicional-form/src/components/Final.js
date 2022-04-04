import React from "react";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default class Final extends React.Component {
  render() {

    return (
        <Main>
        <h2>O FORMULÁRIO ACABOU</h2>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
        </Main>
    )}
}
