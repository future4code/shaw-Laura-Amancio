import React from "react";
import styled from "styled-components";
import logo from "../img/laubefy.png"

const HeaderStyle =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1d1d1d;
    padding-top: 4px;

    img{
        width: 25vh;
    }
    h1{
        color: white;
    }
`

export default class Header extends React.Component{
    render(){
        return (
            <HeaderStyle>
                <img 
                src={logo}
                alt="Cópia do logo do spotfy, porém todo rabiscado"
                 />
                <div>
                    <h1>LAUBEFY</h1>
                </div>
            </HeaderStyle>
        )
    }
}