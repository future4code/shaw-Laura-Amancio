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


const AdminHomePage = () => {
  useProtectedPage();

  const [trips, setTrips] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    getTrips()
  },[trips.length])

  const getTrips = () =>{
    axios.get(`${baseUrl}laura-amancio-shaw/trips`)
    .then((res) => {
      setTrips(res.data.trips)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  const renderTrips = trips.map((trip) => {
    return (
      <li key={trip.id} onClick={() => goToTripDetailsPage(navigate, trip.id)}>{trip.name}</li>
    )
  })

  return (
    <div>
      <h2>Adm Home Page</h2>
      <ul>
        {renderTrips}
      </ul>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button onClick={() => goToLoginPage(navigate)}>Logout</button>
    </div>
  );
};

export default AdminHomePage;
