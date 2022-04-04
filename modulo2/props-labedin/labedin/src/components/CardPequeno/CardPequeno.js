import React from "react";
// import './CardPequeno.css';
import styled from "styled-components";

const LittleCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;

    img{
      width: 70px;
      margin-right: 10px;
      border-radius: 50%;
    }

    p{
      margin-bottom: 15px;
    }

    div{
      display: flex;
      flex-direction: column;
      justify-items: flex-start;
    }

`

function CardPequeno(props) {
  return (
    <LittleCard>
      <img src={props.imagem}/>
      <div>
        <h4>{props.valor}</h4>
        <p>{props.endereco}</p>
      </div>
    </LittleCard>
  );
}

export default CardPequeno;
