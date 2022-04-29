import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToApplicationPage } from "../routes/cordinators";
import axios from "axios";
import { baseUrl } from "../constants/constants";

const ListTripPage = () => {

    const [tripsList, setTrips] = useState([])

    useEffect(() => {
        getTrips()
    },[tripsList.lenght])

    const navigate = useNavigate()

    const getTrips = () =>{
        axios.get(`${baseUrl}laura-amancio-shaw/trips`)
        .then((res) => {
          setTrips(res.data.trips)
        })
        .catch((err) => {
          console.log(err.response)
        })
      }

      const renderTripsList = tripsList.map((trip) =>{
        // const date = new Date(trip.date);
        // const dateString = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
        return (
          <div key={trip.id}>
            <p>Nome: {trip.name}</p>
            <p>Descrição: {trip.name}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Data: {trip.date}</p>
            <p>Duração: {trip.durationInDays}</p>
          </div>
        )
      })

    return (
        <div>
            <h2>Lista de Viagens</h2>
            {renderTripsList}
            <button onClick={() => goToApplicationPage(navigate)}>Inscrever-se</button>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}

export default ListTripPage;