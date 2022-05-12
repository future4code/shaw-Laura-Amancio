import React from "react";
import { CircularProgress } from "@material-ui/core";
import { LoadContainer } from "./styledLoading";

const Loading = () =>{
    return (
        <LoadContainer>
            <CircularProgress/>
        </LoadContainer>
    )
}

export default Loading;