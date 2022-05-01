import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationPage } from "../routes/cordinators";
import axios from "axios";
import { baseUrl } from "../constants/constants";
import styled from "styled-components";

const Button = styled.button`
  width: 8vw;
  height: 3vh;
  font-size: medium;
  background-color: #260729;
  color: #ebdfcc;
  margin: 8px;

  :hover {
    background-color: #2a2344;
    cursor: pointer;
  }
`;

const CardTrip = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 250px;
  height: 180px;
  justify-content: center;
  align-items: center;
  font-size: large;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2{
    color: #2a2344;
    margin: 20px;
  }

  div{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`

const ListTripPage = () => {
  const [tripsList, setTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, [tripsList.lenght]);

  const navigate = useNavigate();

  const getTrips = () => {
    axios
      .get(`${baseUrl}laura-amancio-shaw/trips`)
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const renderTripsList = tripsList.map((trip) => {
    return (
      <CardTrip key={trip.id}>
        <p>Nome: {trip.name}</p>
        <p>Descrição: {trip.name}</p>
        <p>Planeta: {trip.planet}</p>
        <p>Data: {trip.date}</p>
        <p>Duração: {trip.durationInDays}</p>
      </CardTrip>
    );
  });

  return (
    <Main>
      <h2>Lista de Viagens</h2>
      <div>
        {renderTripsList}
      </div>
      <Button onClick={() => goToApplicationPage(navigate)}>
        Inscrever-se
      </Button>
      <Button onClick={() => goBack(navigate)}>Voltar</Button>
    </Main>
  );
};

export default ListTripPage;
