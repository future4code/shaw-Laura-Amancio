import React, { useEffect, useState } from "react";
import { goBack } from "../routes/cordinators";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../constants/constants";
import { useProtectedPage } from "../hooks/useProtectedPages";


const TripDetailsPage = () => {
    useProtectedPage();
    const [tripDetails, setTripDetails] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const token = localStorage.getItem("token")

    useEffect(()=>{
        getTripDetails()
    },[])


    const getTripDetails = () => {

        const headers = {
            headers: {
                auth: token
            }
        }
        axios.get(`${baseUrl}laura-amancio-shaw/trip/${params.id}`, headers)
        .then((res) => {
            setTripDetails(res.data.trip)
            console.log(res.data.trip)
        })
        .catch((err) => {
            console.log(err.response)
        })
    } 

    console.log(params.id)

    return (
        <div>
            <h2>Trip Details Page</h2>
            <h3>Nome: {tripDetails.name}</h3>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}

export default TripDetailsPage;