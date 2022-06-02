import React from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPages";
import { goBack } from "../routes/cordinators";
import useForm from "../hooks/useForm";
import axios from "axios";
import { baseUrl } from "../constants/constants";
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2{
    color: #2a2344;
    margin-top: 20px;
  }
`

const CreateTripPage = () => {
  useProtectedPage();

  const navigate = useNavigate();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const submit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        auth: token,
      },
    };
    axios
      .post(`${baseUrl}laura-amancio-shaw/trips`, form, headers)
      .then((res) => {
        alert("viagem criada com sucesso");
        cleanFields();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <Main>
      <h2>Crie uma Viagem!</h2>
      <Form onSubmit={submit}>
        <input
          placeholder="Título"
          name="name"
          value={form.name}
          onChange={onChange}
          pattern={"^.{5,}"}
          title={"O título deve ter no mínimo 5 letras"}
          required
        />
        <select
          name="planet"
          value={form.planet}
          onChange={onChange}
          required
        >
          <option>Selecione um planeta</option>
          <option>Mercúrio</option>
          <option>Vênus</option>
          <option>Marte</option>
          <option>Júpiter</option>
          <option>Saturno</option>
          <option>Urano</option>
          <option>Netuno</option>
          <option>Lua</option>
        </select>

        <input
          placeholder="Data"
          name="date"
          value={form.date}
          onChange={onChange}
          type="date"
          min={new Date().toISOString().split('T')[0]}
          required
        />
        <input
          placeholder="Descrição"
          name="description"
          value={form.description}
          onChange={onChange}
          pattern={"^.{30,}"}
          title={"O título deve ter no mínimo 30 caracteres"}
          required
        />
        <input
          placeholder="Duração em dias"
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          min={5}
          title={"Deve ter no mínimo 5 dias"}
          required
          type="number"
        />
        <Button>Criar</Button>
      </Form>
      <Button onClick={() => goBack(navigate)}>Voltar</Button>
    </Main>
  );
};

export default CreateTripPage;
