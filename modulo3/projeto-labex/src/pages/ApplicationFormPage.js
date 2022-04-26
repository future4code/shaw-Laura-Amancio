import React from "react";
import { goBack } from "../routes/cordinators";
import { useNavigate } from "react-router-dom";

const ApplicationFormPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h2>Application Form Page</h2>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button>Enivar</button>
        </div>
    )
}

export default ApplicationFormPage;