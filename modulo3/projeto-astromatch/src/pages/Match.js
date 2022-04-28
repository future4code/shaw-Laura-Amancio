import React, {useState, useEffect} from "react";
import axios from "axios";
import {urlMatchs} from "../constants/Constants"
import styled from "styled-components";

const CardMatch = styled.div`
    display: flex;
    margin: 10px;

    img{
        height: 50px;
        width: 50px;
        border-radius: 100%;
        margin-right: 10px;
    }
`

const Match = () => {
    const[matches, setMatches] = useState([])

    useEffect(() =>{
        getMatches()
    }, [matches])

    const getMatches = () =>{
        axios
        .get(urlMatchs)
        .then((res)=>{
            setMatches(res.data.matches)
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }

    const renderMatches = matches.map((match) => {
        return (
            <CardMatch key={match.id}>
                <img src={match.photo} alt={match.name}/>
                <p>{match.name}</p>
            </CardMatch>
        )
    })
    return(
        <div>
            {renderMatches}
        </div>
    )
}

export default Match;