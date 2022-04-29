import React from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPages";
import { goBack } from "../routes/cordinators";
import useForm from "../hooks/useForm";
import axios from "axios";
import { baseUrl } from "../constants/constants";

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
        alert("viagem criada com sucesso")
        cleanFields()
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <h2>CreateTrip Page</h2>
      <form onSubmit={submit}>
        <input
          placeholder="Título"
          name="name"
          value={form.name}
          onChange={onChange}
          required
        />
        <input
          placeholder="Planeta"
          name="planet"
          value={form.planet}
          onChange={onChange}
          required
        />
        <input
          placeholder="Data"
          name="date"
          value={form.date}
          onChange={onChange}
          type="date"
          required
        />
        <input
          placeholder="Descrição"
          name="description"
          value={form.description}
          onChange={onChange}
          required
        />
        <input
          placeholder="Duração em dias"
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          required
          type="number"
        />
        <button>Criar</button>
      </form>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  );
};

export default CreateTripPage;
