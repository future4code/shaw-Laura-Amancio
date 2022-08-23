import axios from "axios"
import {BASE_URL} from "../constants/urls"
import {goToFeedPage} from "../routes/coordinator"

export const login = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      setIsLoading(false)
      goToFeedPage(navigate)
      setRightButtonText("Logout")
    })
    .catch((err)=> {
      setIsLoading(false)
      alert(err.response.data.message)
    })
  }

export const signup = (body, clear, navigate, setRightButtonText, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/users/signup`, body)
  .then((res) => {
    localStorage.setItem("token", res.data.token)
    goToFeedPage(navigate)
    clear()
    setIsLoading(false)
    setRightButtonText("Logout")
  })
  .catch((err) => {
    setIsLoading(false)
    alert(err.response.data.message)
  })
}