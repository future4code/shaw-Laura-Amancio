import axios from "axios"
import {BASE_URL} from "../constants/urls"
import { goToFeedPage, goToVotePage } from "../routes/coordinator"

export const createPoll = (body, clear, headers, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/polls`, body, headers)
    .then((res) => {
        clear()
        setIsLoading(false)
        alert(res.data.message)
    })
    .catch((err) => {
        setIsLoading(false)
        alert(err.response.data.message)
    })
}

export const createVote = (vote, id, headers, getVotes) => {
    const body ={
        answer: vote
    }
    axios.post(`${BASE_URL}/polls/${id}`, body, headers)
    .then((res) => {
        alert(res.data.message)
        getVotes()
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}

export const deletePoll = (id, headers, navigate) => {
    axios.delete(`${BASE_URL}/poll/${id}`, headers)
    .then((res) => {
        alert(res.data.message)
        goToFeedPage(navigate)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}

export const editPoll = (body, id, headers, navigate) => {
    axios.put(`${BASE_URL}/polls/${id}`, body, headers)
    .then((res) => {
        alert(res.data.message)
        goToVotePage(navigate, id)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}