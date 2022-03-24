import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150/",
      },
      {
        nomeUsuario: "Laura",
        fotoUsuario:
          "https://media-exp1.licdn.com/dms/image/D4D03AQFO0FQ5nR72Ug/profile-displayphoto-shrink_400_400/0/1644776020442?e=1653523200&v=beta&t=yKywt8kjJprvKhb_2xY7DgdEYYg2ib7bNQUP_dtTUA8",
        fotoPost:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKEv76y2sDVr8LT5gQKmLtGECpL7Ow-F8gg&usqp=CAU",
      },
      {
        nomeUsuario: "Chico",
        fotoUsuario:
          "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/2/d/b/a/2dba8bbb3df37f0a86d48906ec4885af.jpg",
        fotoPost:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubvKa8kdnVawAk4vqZL35f4atn-ZJd88WHg&usqp=CAU",
      },
    ],
  };

  // cria 3 onChange, um pra usuario, postagem e imagem. Cria um onClick para o button
  //cria um novo array e faz o negócio do push. depos disso coloco o setState
  render() {
    const renderizaTela = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });
    return (
      <MainContainer>
        {/* <div> */}
          {/* <label>Usuário</label>
          <input onChange={""} value={""} />

          <label>Postagem</label>
          <input onChange={""} value={""} />

          <label>Imagem</label>
          <input onChange={""} value={""} />

          <button onClick={""}>Publicar Postagem</button>
        </div> */}
        {renderizaTela}
      </MainContainer>
    );
  }
}

export default App;
