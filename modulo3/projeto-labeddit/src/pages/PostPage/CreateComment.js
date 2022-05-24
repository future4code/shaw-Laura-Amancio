import React, {useState} from "react";
import { TextField, Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import {createComment} from "../../services/posts"
import { useParams } from "react-router-dom";
import {CreateCommentCard} from "./styledPostPage"
import CircularProgress from '@material-ui/core/CircularProgress';
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

const CreateComment = () => {
  const { form, onChange, clear } = useForm({ body: "" });
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: token,
    },
  };
  const params = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [comments, getComments] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)


  const onSubmitForm = (event) => {
    event.preventDefault();
    createComment(form, clear, headers, params.id, setIsLoading, getComments);
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
          required
        />
        <Button variant="contained" color="primary" type="submit">
        {isLoading? <CircularProgress color="inherit" size="2rem"/> : <>Comentar</>}
        </Button>
      </form>
    </CreateCommentCard>
  );
};

export default CreateComment;
