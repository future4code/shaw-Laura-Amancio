import styled from "styled-components"

export const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3%;
    height: fit-content;

    img{
        width: 30%;
        max-width: 200px;
    }
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 75%;
    padding-bottom: 3%;

    Button{
        margin-top: 3%;
    }
`