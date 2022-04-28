import React from "react";
import axios from "axios";
import {urlClear} from "../constants/Constants"

const ClearButton = () =>{

    const clearAll = () =>{
        axios
        .put(urlClear)
        .then(() =>{
            alert("site limpo, pode dar matchs de novo")
        })
        .catch((err) =>{
            console.log(err.response.data)
        })
    }
    return (
        <div>
            <button onClick={clearAll}>Limpar Tudo</button>
        </div>
    )
}

export default ClearButton;