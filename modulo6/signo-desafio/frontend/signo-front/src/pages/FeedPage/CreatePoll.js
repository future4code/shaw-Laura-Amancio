import React, { useState } from "react";
import useForm from "../../hooks/UseForm";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { createPoll } from "../../services/polls";
import { DateContainer, FormContainer, FormDateCard } from "./styled";
import CircularProgress from '@material-ui/core/CircularProgress'

const CreatePoll = (getPolls) => {
  const [isLoading, setIsLoading] = useState(false)
  const { form, onChange, clear } = useForm({
    title: "",
    start_date: "",
    end_date: "",
  })
  const token = localStorage.getItem("token")
  const headers = {
    headers: {
      authorization: token,
    },
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    createPoll(form,clear,headers, setIsLoading)
  };

  return (
    <FormContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"title"}
          label="Escreva sua enquete"
          value={form.title}
          onChange={onChange}
          required
          fullWidth
          type={"text"}
          multiline
          rows={4}
          variant="outlined"
        />
        <FormDateCard>
        <DateContainer>
          <p>Data de início</p>
          <TextField
            name={"start_date"}
            value={form.start_date}
            onChange={onChange}
            required
            type={"date"}
            variant="outlined"
          />
        </DateContainer>
        <DateContainer>
          <p>Data de término</p>
          <TextField
            name={"end_date"}
            value={form.end_date}
            onChange={onChange}
            required
            type={"date"}
            variant="outlined"
          />
        </DateContainer>
        </FormDateCard>
        <Button
          type={"submit"}
          variant={"contained"}
          color={"primary"}
        >
        {isLoading? <CircularProgress color={"inherit"} size={25}/> : "Criar"}
        </Button>
      </form>
    </FormContainer>
  )
}

export default CreatePoll