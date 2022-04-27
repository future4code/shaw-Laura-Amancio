import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goBack,
  goToCreateTripPage,
  goToLoginPage,
  goToTripDetailsPage,
} from "../routes/cordinators";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../constants/constants";

const AdminHomePage = () => {
  const navigate = useNavigate();
  // const [trips,setTrips] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}laura-amancio-shaw/trips`)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response)
    })
  })

  return (
    <div>
      <h2>Adm Home Page</h2>
      <ul>
        <li onClick={() => goToTripDetailsPage(navigate)}>Viagem exemplo</li>
      </ul>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button onClick={() => goToLoginPage(navigate)}>Logout</button>
    </div>
  );
};

export default AdminHomePage;
