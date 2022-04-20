import React, {useState, useEffect} from "react";
import axios from "axios";
import {urlMatchs} from "../constants/Constants"

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
            <div key={match.id}>
                <img src={match.photo} alt={match.name}/>
                <p>{match.name}</p>
            </div>
        )
    })
    return(
        <div>
            {renderMatches}
        </div>
    )
}

export default Match;