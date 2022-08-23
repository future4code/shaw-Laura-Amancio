import { Button, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios"
import useProtectdPage from "../../hooks/UseProtectedPage";
import useRequestData from "../../hooks/UseRequestData";
import { editPoll } from "../../services/polls";
import { goBack } from "../../routes/coordinator";
import { DateContainer, FormContainer, FormDateCard } from "../EditPollPage/styled";

const EditPollPage = () => {
    useProtectdPage()
    const navigate = useNavigate()
    const params = useParams()
    const poll = useRequestData({}, `${BASE_URL}/polls/${params.id}`)
    const [title, setTitle] = useState("")
    const [start_date, setStart_date] = useState("")
    const [end_date, setEnd_date] = useState("")
    const token = localStorage.getItem("token")
    const headers = {
    headers: {
      authorization: token,
    },
    }
    const body = {
      title,
      start_date,
      end_date
  }

    const newStartDate = new Date(poll[0].start_date)
    const newEndDate = new Date(poll[0].end_date)
    const startDateFormated = ((newStartDate.getDate())) + "-" + (newStartDate.getMonth() +1) + "-" + newStartDate.getFullYear()
    const endDateFormated = ((newEndDate.getDate())) + "-" + (newEndDate.getMonth() +1) + "-" + newEndDate.getFullYear()

    const getPoll = async() => {
      await axios.get(`${BASE_URL}/polls/${params.id}`, headers)
      .then((res) => {
          setTitle(poll[0] && poll[0].title)
          setStart_date(poll[0] && poll[0].start_date)
          setEnd_date(poll[0] && poll[0].end_date)
      })
      .catch((err) => {
          alert(err.response.data.message)
      })
    }
    
      const onSubmitForm = (event) => {
        event.preventDefault()
        editPoll(body, params.id, headers, navigate)
      }

      useEffect(() => {
        getPoll()
      },[])

    return(
        <FormContainer>
            <h3>Editar</h3>
            <form onSubmit={onSubmitForm}>
                <TextField
                name={"title"}
                value={title? title : poll[0].title}
                onChange={(e) => setTitle(e.target.value)}
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
                      helperText={startDateFormated}
                      value={start_date}
                      onChange={(e) => setStart_date(e.target.value)}
                      type={"date"}
                      variant="outlined"
                    />
                  </DateContainer>
                  <DateContainer>
                    <p>Data de término</p>
                    <TextField
                      name={"date"}
                      helperText={endDateFormated}
                      value={end_date}
                      onChange={(e) => setEnd_date(e.target.value)}
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
                Salvar
                </Button>
             </form>
             <Button variant={"text"} color={"primary"} onClick={() => {goBack(navigate)}}>Voltar</Button>
        </FormContainer>
    )
}

export default EditPollPage