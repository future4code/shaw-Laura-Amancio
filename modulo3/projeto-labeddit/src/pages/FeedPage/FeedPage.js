import { useProtectedPage } from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { goToPostPage } from "../../routes/condinators";
import CreatePost from "./CreatePost";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {  MainFeed } from "./styledFeedPage";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import ThumbDownRoundedIcon from "@material-ui/icons/ThumbDownRounded";
import AddCommentRoundedIcon from '@material-ui/icons/AddCommentRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Loading from "../../components/Header/Loading/Loading";

const FeedPage = () => {
  useProtectedPage();
  const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: token,
    },
  };

  const createPostVote = (id) => {
    console.log(id);
    const body = {
      direction: 1,
    };
    axios
      .post(`${BASE_URL}/posts/${id}/votes`, body, headers)
      .then((res) => {
        console.log(res.data);
        getPosts()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changePostVote = (id) => {
    const body = {
      direction: -1,
    };
    axios
      .put(`${BASE_URL}/posts/${id}/votes`, body, headers)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePostVote = (id) =>{
    axios.delete(`${BASE_URL}/posts/${id}/votes`, headers)
    .then((res) =>{
      console.log(res.data)
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  const postCard = posts.map((post) => {
    return (
      <Card maxWidth="200px" variant="outlined">
        <CardContent key={post.id} onClick={() => goToPostPage(navigate, post.id)}>
          <Typography color="primary" gutterBottom>Enviado por: {post.username}</Typography>
          <Typography variant="h5" component="h2">{post.title}</Typography>
          <Typography variant="h6" component="h2">{post.body}</Typography>
        </CardContent>
        <CardActions>
          <ThumbUpAltRoundedIcon onClick={() => createPostVote(post.id)} />
          <Typography color="primary" gutterBottom>{post.voteSum? post.voteSum : 0}</Typography>
          <ThumbDownRoundedIcon onClick={() => changePostVote(post.id)} />
          <HighlightOffRoundedIcon onClick={() => deletePostVote(post.id)}/>
          <AddCommentRoundedIcon onClick={() => goToPostPage(navigate, post.id)}/>
          <Typography color="primary" gutterBottom>{post.commentCount? post.commentCount : 0}</Typography>
        </CardActions>
      </Card>
    );
  });

  return (
    <MainFeed>
      <CreatePost />
      {postCard.length > 0 ? postCard : <Loading/>}
    </MainFeed>
  );
};

export default FeedPage;
