import React from "react"
import {useNavigate} from "react-router-dom"
import { goToVotePage } from "../../routes/coordinator"
import useProtectedPage from "../../hooks/UseProtectedPage"
import useRequestData from "../../hooks/UseRequestData"
import {BASE_URL} from "../../constants/urls"
import { MainFeed, PollCard } from "./styled"
import { Button } from "@material-ui/core";
import CreatePoll from "./CreatePoll"

const FeedPage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const [polls, getPolls] = useRequestData([], `${BASE_URL}/polls`)

    const pollsCard = polls.map((poll) => {
        return( 
            <PollCard>
                <h3>{poll.title}</h3>
                <Button onClick={() => goToVotePage(navigate, poll.id)} variant={"contained"} color={"primary"}>Votar</Button>
            </PollCard>
        )
    })

    return(
        <MainFeed>
            <CreatePoll getPolls={getPolls()}/>
            {pollsCard}
        </MainFeed>
    )
}

export default FeedPage;