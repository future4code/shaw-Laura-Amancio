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
      <div>
          <li key={trip.id} onClick={() => goToTripDetailsPage(navigate, trip.id)}>{trip.name}</li>
          <button onClick={() => deleteTrip(trip.id)}>Deletar Viagem</button>
      </div>
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
