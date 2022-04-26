import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goBack,
  goToCreateTripPage,
  goToLoginPage,
  goToTripDetailsPage,
} from "../routes/cordinators";

const AdminHomePage = () => {
  const navigate = useNavigate();

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
