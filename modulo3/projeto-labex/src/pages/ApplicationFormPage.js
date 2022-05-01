import React, {useEffect, useState} from "react";
import { goBack } from "../routes/cordinators";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import axios from "axios";
import { baseUrl } from "../constants/constants"
import styled from "styled-components";

const Button = styled.button`
  width: 8vw;
  height: 3vh;
  font-size: medium;
  background-color: #260729;
  color: #ebdfcc;
  margin: 8px;

  :hover {
    background-color: #2a2344;
    cursor: pointer;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2{
    color: #2a2344;
    margin: 20px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  select{
    margin: 10px;
    height: 30px;
  }

  input{
    margin: 10px;
    height: 30px;
  };
`

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
      alert("Aplicado com sucesso, Boa Sorte!")
      cleanFields()
    })
    .catch((err) =>{
      console.log(err.response)
    })
  }

  const setId = (event) =>{
    setTripId(event.target.value)
  }

  return (
    <Main>
      <h2>Aplique-se em uma de nossas viagens!</h2>

      <Form onSubmit={submit}>
        <select onChange={setId}>
          <option>Selecione uma viagem</option>
          {chooseTrip}
        </select>
        <input
          placeholder="Nome"
          name={"name"}
          value={form.name}
          onChange={onChange}
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}
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
          pattern={"^.{30,}"}
          title={"O título deve ter no mínimo 30 caracteres"}
          required
        />
        <input
          placeholder="Profissão"
          name={"profession"}
          value={form.profession}
          onChange={onChange}
          pattern={"^.{10,}"}
          title={"Profissão deve ter no mínimo 10 caracteres"}
          required
        />

        {/* <select
        name={"country"}
        value={form.country}
        onChange={onChange}
        required
        >
          {dataJson.map((country) =>(
            <option>{country.nome}</option>
          )
          )}
        </select> */}
        <input
        placeholder="Pais"
        name={"country"}
        value={form.country}
        onChange={onChange}
        required
        />
        <Button>Enivar</Button>
      </Form>
      <Button onClick={() => goBack(navigate)}>Voltar</Button>
    </Main>
  );
};

export default ApplicationFormPage;
