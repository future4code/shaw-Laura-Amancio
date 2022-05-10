import {BASE_URL} from "../constants/urls"
import axios from "axios";
import {goToFeedPage} from "../routes/condinators"


export const login = (body, clear, navigate, setRightButton) =>{
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) =>{
      localStorage.setItem("token", res.data.token)
      goToFeedPage(navigate)
      setRightButton("Logout")
      clear()
    })
    .catch((err) =>{
      alert(err.response.data)
      clear()
    })
}

export const signUp = (body, clear, navigate, setRightButton) =>{
  axios.post(`${BASE_URL}/users/signup`, body)
  .then((res) =>{
    localStorage.setItem("token", res.data.token)
    goToFeedPage(navigate)
    clear()
    setRightButton("Logout")
  })
  .catch((err) =>{
    alert(err.response.data)
  })
}