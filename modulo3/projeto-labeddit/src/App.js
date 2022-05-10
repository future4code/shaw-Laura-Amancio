import React, {useState} from "react";
import Router from "./routes/Router";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const token = localStorage.getItem("token")
  const [rightButton, setRightButton] = useState(token ? "Logout" : "Login");


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButton={rightButton} setRightButton={setRightButton}/>
        <Router  rightButton={rightButton} setRightButton={setRightButton} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
