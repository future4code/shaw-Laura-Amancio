import React, {useEffect, useState} from "react";
import { goBack } from "../routes/cordinators";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import axios from "axios";
import { baseUrl } from "../constants/constants"

const ApplicationFormPage = () => {
  const navigate = useNavigate();

  const [tripsList, setTrips] = useState([])
  const [tripId, setTripId] = useState("")


  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  useEffect(() =>{
    getTrips();
  },[])

  const getTrips = () => {
    axios.get(`${baseUrl}laura-amancio-shaw/trips`)
    .then((res) => {
      setTrips(res.data.trips)
      cleanFields()
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  const chooseTrip = tripsList.map((trip) =>{
    return (
      <option key={trip.id} value={trip.id}>
        {trip.name}
      </option>
    )
  })

  const submit = (event) =>{
    event.preventDefault();
    axios.post(`${baseUrl}laura-amancio-shaw/trips/${tripId}/apply`, form)
    .then((res) =>{
      console.log(res.data)
      cleanFields()
    })
    .catch((err) =>{
      console.log(err.response)
    })
  }

  const setId = (event) =>{
    setTripId(event.target.value)
  }

  console.log(form)

  return (
    <div>
      <h2>Application Form Page</h2>

      <form onSubmit={submit}>
        <select onChange={setId}>
          <option>Selecione uma viagem</option>
          {chooseTrip}
        </select>
        <input
          placeholder="Nome"
          name={"name"}
          value={form.name}
          onChange={onChange}
          required
        />
        <input
          placeholder="Idade"
          name={"age"}
          value={form.value}
          onChange={onChange}
          type={"number"}
          required
          min={18}
        />
        <input
          placeholder="Texto de Candidatura"
          name={"applicationText"}
          value={form.applicationText}
          onChange={onChange}
          required
        />
        <input
          placeholder="Profissão"
          name={"profession"}
          value={form.profession}
          onChange={onChange}
          required
        />
        <input
        placeholder="Pais"
        name={"country"}
        value={form.country}
        onChange={onChange}
        required
        />
        <button>Enivar</button>
      </form>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  );
};

export default ApplicationFormPage;
