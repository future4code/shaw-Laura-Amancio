import React from "react";
import Router from "./routes/Router";
import Header from "./components/header";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #ebdfcc;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Header />
      <Router />
    </div>
  );
};

export default App;
