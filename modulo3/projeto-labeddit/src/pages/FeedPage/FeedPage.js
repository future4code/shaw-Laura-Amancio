import { useProtectedPage } from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { goToPostPage } from "../../routes/condinators";
import CreatePost from "./CreatePost";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CardPost, Likes, MainFeed } from "./styledFeedPage";
// import like from "../../assets/cima.png"
// import colorLike from "../../assets/like.png"
// import deslike from "../../assets/baixo.png"
// import colorDeslike from "../../assets/baixo.png"

const FeedPage = () => {
  useProtectedPage();
  const posts = useRequestData([], `${BASE_URL}/posts`);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: token,
      },
    };

  const createPostVote = (id) => {
    console.log(id)
    const body = {
      direction: 1,
    };
    axios
      .post(`${BASE_URL}/posts/${id}/votes`, body, headers)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changePostVote = (id) =>{
    const body ={
      direction: -1
    }
    axios.put(`${BASE_URL}/posts/${id}/votes`, body, headers)
    .then((res) =>{
      console.log(res.data)
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  const postCard = posts?.map((post) => {
    return (
      <CardPost>
        <div key={post.id} onClick={() => goToPostPage(navigate, post.id)}>
          <p>Enviado por: {post.username}</p>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
        <Likes>
          <button onClick={() => createPostVote(post.id)}>curtir</button>
          <p>{post.voteSum}</p>
          <button onClick={() => changePostVote(post.id)}>descurtir</button>
        </Likes>
      </CardPost>
    );
  });

  return (
    <MainFeed>
      <CreatePost />
      {postCard}
    </MainFeed>
  );
};

export default FeedPage;
