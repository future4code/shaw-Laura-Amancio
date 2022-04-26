import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToAdminHome } from "../routes/cordinators";

const LoginPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h2>Login Page</h2>
            <p>Aqui fingimos que a pessoa fez o login rs</p>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goToAdminHome(navigate)}>Login</button>
        </div>
    )
}

export default LoginPage;