import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const FeedPage = () =>{
    useProtectedPage()
    return (
        <div>
            <h2>FeedPage</h2>
        </div>
    )
}

export default FeedPage;