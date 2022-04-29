import React, { useEffect, useState } from "react";
import { goBack } from "../routes/cordinators";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../constants/constants";
import { useProtectedPage } from "../hooks/useProtectedPages";

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
        <div>
          <p>{candidate.name}</p>
          <p>{candidate.profession}</p>
          <p>{candidate.country}</p>
          <p>{candidate.applicationText}</p>
          <button onClick={() => decideCandidate(candidate.id, true)}>
            Aprovar
          </button>
          <button onClick={() => decideCandidate(candidate.id, false)}>
            Desaprovar
          </button>
        </div>
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

  return (
    <div>
      <h2>Trip Details Page</h2>
      <div>
        <h3>{tripDetails.name}</h3>
        <p>Planeta: {tripDetails.planet}</p>
        <p>Descrição: {tripDetails.description}</p>
        <p>Data: {tripDetails.date}</p>
        <p>Duração: {tripDetails.durationInDays} dias</p>
        <button onClick={() => goBack(navigate)}>Voltar</button>
      </div>
      <div>
        <h3>Candidatos pendentes</h3>
        {candidates}
      </div>
      <div>
        <h3>Candidatos aprovados</h3>
        {approvedCandidates}
      </div>
    </div>
  );
};

export default TripDetailsPage;
