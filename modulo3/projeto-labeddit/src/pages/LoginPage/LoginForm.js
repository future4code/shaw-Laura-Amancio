import React, {useState} from "react";
import { TextField, Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import {login} from "../../services/users"
import { useNavigate } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';


const LoginForm = ({setRightButton}) => {
  const { form, onChange, clear } = useForm({ email: "", password: "" });
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate, setRightButton, setIsLoading)
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
          label="Email"
          type="email"
          variant="filled"
          margin="normal"
        />

        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label="Senha"
          type="password"
          variant="filled"
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          {isLoading? <CircularProgress color="inherit" size="2rem"/> : <>Login</>}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
