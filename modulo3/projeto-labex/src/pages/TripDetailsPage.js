import React from "react";
import { goBack } from "../routes/cordinators";
import { useNavigate } from "react-router-dom";

const TripDetailsPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h2>Trip Details Page</h2>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}

export default TripDetailsPage;