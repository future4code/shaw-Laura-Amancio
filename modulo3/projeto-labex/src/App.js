import React from "react";
import Router from "./routes/Router";
import Header from "./components/header";

const App = () => {
    return (
        <div>
            <Header/>
            <Router/>
        </div>
    )
}

export default App;