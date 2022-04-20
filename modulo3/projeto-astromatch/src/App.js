import React, {useState} from "react";
import Home from "./pages/Home";
import Match from "./pages/Match";
import Header from "./components/Header";
import ClearButton from "./components/ClearButton";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const goHome = () => {
    setCurrentPage("home")
  }

  const goMatch = () => {
    setCurrentPage("match")
  }

  return (
  <Main>

    <Header goHome={goHome} goMatch={goMatch} />
    <div>
      {currentPage === "home" ? <Home/> : <Match/> }
      <ClearButton/>
    </div>
  </Main>
)}