import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const Header = (props) => {
    return (
        <HeaderStyle>
            <button onClick={() => props.goHome()}>Home</button>
            <h1>AstroMatch</h1>
            <button onClick={() => props.goMatch()}>Matchs</button>
        </HeaderStyle>
    )
}

export default Header;

