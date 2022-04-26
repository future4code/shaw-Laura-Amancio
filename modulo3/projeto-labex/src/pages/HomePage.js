import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripPage, goToLoginPage } from "../routes/cordinators";

const HomePage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={() => goToListTripPage (navigate)}>Ver Viagens</button>
            <button onClick={() => goToLoginPage (navigate)}>Administrativo</button>
        </div>
    )
}

export default HomePage;