import React, {useState} from "react";
import { TextField, Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import {createPost} from "../../services/posts"
import {CardCreatePost} from "./styledFeedPage"
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

const CreatePost = () => {
  const { form, onChange, clear } = useForm({ title: "", body: "" });
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: token,
    },
  };
  const [isLoading, setIsLoading] = useState(false)
  const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`);

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost(form, clear, headers, setIsLoading, getPosts);
  };

  return (
    <CardCreatePost>
      <br/>
      <Typography color="primary" variant="h5">Faça um post ;)</Typography>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"title"}
          value={form.title}
          onChange={onChange}
          required
          label="Título"
          variant="filled"
          margin="normal"
        />

        <TextField
          name={"body"}
          value={form.body}
          onChange={onChange}
          label="Descrição"
          variant="filled"
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          {isLoading? <CircularProgress color="inherit" size="2rem"/> : <>Postar</>}
        </Button>
      </form>
    </CardCreatePost>
  );
};

export default CreatePost;
