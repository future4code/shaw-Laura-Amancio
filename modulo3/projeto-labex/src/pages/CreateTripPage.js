import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/cordinators";

const CreateTripPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h2>CreateTrip Page</h2>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button>Criar</button>
        </div>
    )
}

export default CreateTripPage;