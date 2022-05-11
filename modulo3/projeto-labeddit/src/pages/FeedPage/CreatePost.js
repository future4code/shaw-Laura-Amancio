import React from "react";
import { TextField, Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import {createPost} from "../../services/posts"
import {CardCreatePost} from "./styledFeedPage"

const CreatePost = () => {
  const { form, onChange, clear } = useForm({ title: "", body: "" });
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: token,
    },
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost(form, clear, headers);
  };

  return (
    <CardCreatePost>
      <h3>Faça um post ;)</h3>
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
          Postar
        </Button>
      </form>
    </CardCreatePost>
  );
};

export default CreatePost;
