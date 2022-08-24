import styled from "styled-components"

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

        @media screen and (min-device-width : 1000px){
            width: 20%;
        }
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

export const DateContainer = styled.div`
    display: flex;
    width: 80vw;
    justify-content: space-between;
    padding: 2%;

    p{
        font-weight: bolder;
    }
`