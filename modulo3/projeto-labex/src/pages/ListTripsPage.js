import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationPage } from "../routes/cordinators";

const ListTripPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h2>Lista de Viagens</h2>
            <button onClick={() => goToApplicationPage(navigate)}>Inscrever-se</button>
            <div>
                <p>viagem1</p>
            </div>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}

export default ListTripPage;