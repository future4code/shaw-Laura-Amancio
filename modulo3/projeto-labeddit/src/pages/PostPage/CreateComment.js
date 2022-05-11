import React from "react";
import { TextField, Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import {createComment} from "../../services/posts"
import { useParams } from "react-router-dom";
import {CreateCommentCard} from "./styledPostPage"

const CreateComment = () => {
  const { form, onChange, clear } = useForm({ body: "" });
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: token,
    },
  };
  const params = useParams()

  const onSubmitForm = (event) => {
    event.preventDefault();
    createComment(form, clear, headers, params.id);
  };

  return (
    <CreateCommentCard>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"body"}
          value={form.body}
          onChange={onChange}
          label="Comentário"
          variant="filled"
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Comentar
        </Button>
      </form>
    </CreateCommentCard>
  );
};

export default CreateComment;
