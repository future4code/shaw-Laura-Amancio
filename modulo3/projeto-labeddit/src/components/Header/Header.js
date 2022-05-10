import {StyledToolbar} from "./styledHeader"
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import {goToFeedPage, goToLoginPage} from "../../routes/condinators"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo-labeddit.png"



const Header = ({rightButton, setRightButton}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")

  const logout = () =>{
    localStorage.removeItem("token")
  }

  const rightButtonAction = () =>{
    if(token){
      logout()
      setRightButton("Login")
      goToLoginPage(navigate)
    }else{
      goToLoginPage(navigate)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToFeedPage(navigate)} color="inherit"> Labeddit </Button>
          <div>
           <img src={logo} alt={"logo laranja e cinza da labeddit"}/>
          </div>
          <Button onClick={rightButtonAction} color="inherit"> {rightButton} </Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header;