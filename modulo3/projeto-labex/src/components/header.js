import React from "react";
import styled from "styled-components";

const HeaderMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #260729;
    color: white;
    padding: 20px;

    h1{
        background-color: #260729;
    }
`

const Header = () => {
    return (
        <HeaderMain>
            <h1>LabeX</h1>
        </HeaderMain>
    )
}

export default Header;