import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goBack,
  goToCreateTripPage,
  goToLoginPage,
  goToTripDetailsPage,
} from "../routes/cordinators";
import { useEffect, useState} from "react";
import axios from "axios";
import { baseUrl } from "../constants/constants";
import { useProtectedPage } from "../hooks/useProtectedPages";
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul{
    list-style-type: none;
  }

  h2{
    color: #2a2344;
    margin: 20px;
  }
`

const TripCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  width: 400px;
  margin: 8px;
  padding-right: 5px;
  padding-left: 8px;

  :hover{
    cursor: pointer;
  }
`


const AdminHomePage = () => {
  useProtectedPage();

  const [trips, setTrips] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    getTrips()
  },[trips])

  const getTrips = () =>{
    axios.get(`${baseUrl}laura-amancio-shaw/trips`)
    .then((res) => {
      setTrips(res.data.trips)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  const deleteTrip = (id) =>{
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        auth: token,
      },
    };
    axios.delete(`${baseUrl}laura-amancio-shaw/trips/${id}`, headers)
    .then((res) =>{
      alert("viagem excluída com sucesso")
    })
    .catch((err) =>{
      alert("hm, algo deu errado")
    })
  }

  const renderTrips = trips.map((trip) => {
    return (
      <TripCard>
          <li key={trip.id} onClick={() => goToTripDetailsPage(navigate, trip.id)}>{trip.name}</li>
          <Button onClick={() => deleteTrip(trip.id)}>Deletar Viagem</Button>
      </TripCard>
    )
  })

  return (
    <Main>
      <h2>Home Administrativa</h2>
      <ul>
        {renderTrips}
      </ul>
      <Button onClick={() => goBack(navigate)}>Voltar</Button>
      <Button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</Button>
      <Button onClick={() => goToLoginPage(navigate)}>Logout</Button>
    </Main>
  );
};

export default AdminHomePage;
