import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { goToFeedPage } from "../routes/condinators";

export const login = (body, clear, navigate, setRightButton, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      setIsLoading(false)
      goToFeedPage(navigate);
      setRightButton("Logout");
    })
    .catch((err) => {
      alert(err.response.data);
      clear();
      setIsLoading(false)
    });
};

export const signUp = (body, clear, navigate, setRightButton, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      setIsLoading(false)
      goToFeedPage(navigate);
      setRightButton("Logout");
    })
    .catch((err) => {
      alert(err.response.data);
      clear()
      setIsLoading(false)
    });
};
