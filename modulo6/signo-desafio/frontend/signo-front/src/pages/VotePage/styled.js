import styled from "styled-components"


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    Button{
        margin-top: 4%;
    }
`

export const TitleCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2{
        text-align: center;
    }
`
export const Icons = styled.div`
    display: flex;
    align-items: center;
`

export const VoteContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 3%;
`

export const VoteCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
    font-weight: bolder;

    Button{
        width: 60%;
    }
`

export const OutDateVote = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3%;
`