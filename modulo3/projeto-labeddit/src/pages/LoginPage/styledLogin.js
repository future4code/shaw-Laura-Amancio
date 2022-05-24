import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        display: flex;
        flex-direction: column;
    }
`

export const CardImg = styled.div`
    width: 30%;
    margin-top: 80px;

    img{
        width: 100%;
        max-width: 150px;
    }
`