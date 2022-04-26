import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import styled from "styled-components";

const HeaderMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    padding: 5px;
`

const Header = () => {

    return (
        <HeaderMain>
            <h1>LabeX</h1>
            <HomeIcon/>
        </HeaderMain>
    )
}

export default Header;