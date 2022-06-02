import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripPage, goToLoginPage } from "../routes/cordinators";
import styled from "styled-components";

const Home = styled.div`
  padding-top: 20px;

  h2 {
    display: flex;
    justify-content: center;
    color: #2a2344;
  }
`;

const NavArea = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
`

const Button = styled.button`
    width: 15vw;
    height: 5vh;
    font-size: large;
    background-color: #260729;
    color: #ebdfcc;

    :hover{
        background-color: #2a2344;
        cursor: pointer;
    }
`

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Home>
      <h2>Viage pelos melhores destinhos da Galáxia</h2>
      <NavArea>
        <Button
          vaviant="contained"
          palette="primary"
          onClick={() => goToListTripPage(navigate)}
        >
          Ver Viagens
        </Button>
        <img
          src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-desenho-de-astronauta-espacial.png"
          alt="desenho de um astronauta"
        />
        <Button onClick={() => goToLoginPage(navigate)}>Administrativo</Button>
      </NavArea>
    </Home>
  );
};

export default HomePage;
