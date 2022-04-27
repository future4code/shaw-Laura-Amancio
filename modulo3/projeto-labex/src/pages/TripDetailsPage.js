import React, { useEffect } from "react";
import { goBack } from "../routes/cordinators";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../constants/constants";




const TripDetailsPage = () => {
    // const [tripDetails, setTripDetails] = useState({})
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    console.log(token)

    useEffect(() => {
        
        const headers = {
            headers: {
                auth: token
            }
        }
        axios.get(`${baseUrl}laura-amancio-shaw/trip/HuX9TrzO7VcmaqYiMbSR`, headers)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response)
        })
    },[])

    return (
        <div>
            <h2>Trip Details Page</h2>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}

export default TripDetailsPage;