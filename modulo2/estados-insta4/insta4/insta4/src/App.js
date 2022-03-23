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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150/"}
        />

        <Post
          nomeUsuario={"Laura"}
          fotoUsuario={"https://media-exp1.licdn.com/dms/image/D4D03AQFO0FQ5nR72Ug/profile-displayphoto-shrink_400_400/0/1644776020442?e=1653523200&v=beta&t=yKywt8kjJprvKhb_2xY7DgdEYYg2ib7bNQUP_dtTUA8"}
          fotoPost={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Australia_Day.jpg/1200px-Australia_Day.jpg"}
        />

        <Post
          nomeUsuario={"Chico"}
          fotoUsuario={"https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/2/d/b/a/2dba8bbb3df37f0a86d48906ec4885af.jpg"}
          fotoPost={"https://picsum.photos/200/150"}
        />
      </MainContainer>
    );
  }
}

export default App;
