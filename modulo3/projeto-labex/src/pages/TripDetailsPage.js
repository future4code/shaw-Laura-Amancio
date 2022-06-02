import React, { useEffect, useState } from "react";
import { goBack } from "../routes/cordinators";
import { useNavigate, useParams } from "react-router-dom";
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

  h2{
    color: #2a2344;
    margin: 20px;
  }

  h3{
    color: #2a2344;
  }
`

const TripCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

  p{
    padding: 5px;
  }
`

const PendentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  p{
    padding: 5px;
  }
`


const TripDetailsPage = () => {
  useProtectedPage();
  const [tripDetails, setTripDetails] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const token = localStorage.getItem("token");

  const getTripDetails = () => {
    const headers = {
      headers: {
        auth: token,
      },
    };
    axios
      .get(`${baseUrl}laura-amancio-shaw/trip/${params.id}`, headers)
      .then((res) => {
        setTripDetails(res.data.trip);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const decideCandidate = (candidateID, boolean) => {
    const headers = {
      headers: {
        auth: token,
      },
    };
    const body = {
      approve: boolean,
    };
    axios
      .put(
        `${baseUrl}laura-amancio-shaw/trips/${params.id}/candidates/${candidateID}/decide`,
        body,
        headers
      )
      .then((res) => {
        alert("Sucesso");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const candidates =
    tripDetails.candidates &&
    tripDetails.candidates.map((candidate) => {
      return (
        <PendentCard>
          <p>Nome: {candidate.name}</p>
          <p>Profissão: {candidate.profession}</p>
          <p>País: {candidate.country}</p>
          <p>Texto de Aplicação: {candidate.applicationText}</p>
          <div>
            <Button onClick={() => decideCandidate(candidate.id, true)}>
              Aprovar
            </Button>
            <Button onClick={() => decideCandidate(candidate.id, false)}>
              Desaprovar
            </Button>
          </div>
        </PendentCard>
      );
    });

  useEffect(() => {
    getTripDetails();
  }, [candidates]);

  const approvedCandidates =
    tripDetails.approved &&
    tripDetails.approved.map((approve) => {
      return (
        <div>
          <p>{approve.name}</p>
        </div>
      );
    });

    const data = new Date(tripDetails.date);
    const formatData = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
  return (
    <Main>
      <h2>Detalhes de Viagem</h2>
      <TripCard>
        <h3>{tripDetails.name}</h3>
        <p>Planeta: {tripDetails.planet}</p>
        <p>Descrição: {tripDetails.description}</p>
        <p>Data: {formatData}</p>
        <p>Duração: {tripDetails.durationInDays} dias</p>
        <Button onClick={() => goBack(navigate)}>Voltar</Button>
      </TripCard>
      <div>
        <h3>Candidatos pendentes</h3>
        {candidates}
      </div>
      <div>
        <h3>Candidatos aprovados</h3>
        {approvedCandidates}
      </div>
    </Main>
  );
};

export default TripDetailsPage;
