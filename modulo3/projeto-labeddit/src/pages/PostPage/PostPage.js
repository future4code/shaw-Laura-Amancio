import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import CreateComment from "./CreateComment";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import ThumbDownRoundedIcon from "@material-ui/icons/ThumbDownRounded";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Loading from "../../components/Header/Loading/Loading";
import { useState, useEffect } from "react";
import { CardContainer } from "./styledPostPage";

const PostPage = () => {
  useProtectedPage();
  const params = useParams();
  const [comments, getComments] = useRequestData(
    [],
    `${BASE_URL}/posts/${params.id}/comments`
  );
  const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`);
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: token,
    },
  };
  const [post, setPost] = useState({});

  useEffect(() => {
    for (const post of posts) {
      if (post.id === params.id) {
        setPost(post);
        break;
      }
    }
  }, [posts]);

  const createCommentVote = (id, getComments) => {
    const body = {
      direction: 1,
    };
    axios
      .post(`${BASE_URL}/comments/${id}/votes`, body, headers)
      .then((res) => {
        getComments();
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeCommentVote = (id, getComments) => {
    const body = {
      direction: -1,
    };
    axios
      .put(`${BASE_URL}/comments/${id}/votes`, body, headers)
      .then((res) => {
        getComments();
        alert(res.data);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  const deleteCommentVote = (id, getComments) => {
    axios
      .delete(`${BASE_URL}/comments/${id}/votes`, headers)
      .then((res) => {
        getComments();
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const commentsList = comments?.map((comment) => {
    return (
      <Card margin="normal" variant="outlined" key={comment.id}>
        <CardContent>
          <Typography color="primary" gutterBottom>
            Enviado por: {comment.username}
          </Typography>
          <Typography variant="h5" component="h2">
            {comment.body}
          </Typography>
        </CardContent>
        <CardActions>
          <ThumbUpAltRoundedIcon
            onClick={() => createCommentVote(comment.id, getComments)}
          />
          <Typography color="primary" gutterBottom>
            {comment.voteSum ? comment.voteSum : 0}
          </Typography>
          <ThumbDownRoundedIcon
            onClick={() => changeCommentVote(comment.id, getComments)}
          />
          <HighlightOffRoundedIcon
            onClick={() => deleteCommentVote(comment.id, getComments)}
          />
        </CardActions>
        <br />
      </Card>
    );
  });

  return (
    <div>
      <Card maxWidth="200px" variant="outlined">
        <CardContainer>
          <CardContent key={post.id}>
            <Typography color="primary" gutterBottom>
              Enviado por: {post.username}
            </Typography>
            <Typography variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography variant="h6" component="h2">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <ThumbUpAltRoundedIcon />
            <Typography color="primary" gutterBottom>
              {post.voteSum ? post.voteSum : 0}
            </Typography>
            <ThumbDownRoundedIcon />
            <Typography color="primary" gutterBottom>
              {post.commentCount ? post.commentCount : 0}
            </Typography>
          </CardActions>
        </CardContainer>
      </Card>
      <CreateComment />
      {commentsList.length >= 0 ? commentsList : <Loading />}
    </div>
  );
};

export default PostPage;
