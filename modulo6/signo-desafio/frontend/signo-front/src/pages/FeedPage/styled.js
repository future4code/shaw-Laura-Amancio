import styled from "styled-components"

export const PollCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 2px #111813 solid;
    padding: 1%;
    margin: 2%;
    width: 75%;

    button {
        height: 3vh;
        margin: 2%;
        width: 20%;
    }

    @media screen and (min-device-width : 1000px) {
        display: flex;
        flex-direction: row;
        width: 50vw;
        margin-top: 0;
    }
`

export const FormDateCard = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-device-width : 1000px){
        flex-direction: row;
        width: 50vw;
    }
`

export const MainFeed = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    margin-bottom: 5%;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    Button{
        margin-top: 5%;
    }
`

export const DateContainer = styled.div`
    display: flex;
    width: 80vw;
    justify-content: space-between;
    padding: 2%;

    p{
        font-weight: bolder;
    }
`