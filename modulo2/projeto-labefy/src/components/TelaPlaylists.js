import React from "react";
import axios from "axios";
import TelaInfoPlaylist from "./TelaInfoPlaylist";
import styled from "styled-components";

//CSS

const MainPlay = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vh;
  background-color: #1d1d1d;
  color: white;
  height: 83.2vh;
  align-items: center;

  h3 {
    padding-top: 5vh;
  }
`;
const CardCriaPlay = styled.div`
  display: flex;
  margin-top: 1vh;
  align-items: center;
  width: 100%;
  padding: 2vh;

  input{
    margin-left: 5px;
  }

  button{
    margin-left: 5px;
    width:50px;
    height:20px;
    border-width:1px;
    color:#fff;
    border-color:#18ab29;
    font-weight:bold;
    border-radius: 28px;
    text-shadow: 1px 1px 0px #2f6627;
    background:#44c767;
  }

  button:hover{
    background: #5cbf2a;
    cursor: pointer;
  }
`;

const ListaPlaylist = styled.li`
  list-style-type: none;
  padding: 2vh;
  width: 40vh;
  display: flex;
  justify-content: space-between;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const CardPLaylists = styled.div`

  display: flex;
  align-items: center;

   button {
    width: 50px;
    height: 20px;
    border-width: 1px;
    color: #fff;
    border-color: rgba(208, 2, 27, 1);
    border-radius: 28px;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
    background: rgba(208, 2, 27, 1);
  }

  button:hover{
    background: rgba(192, 65, 65, 1);
    cursor: pointer;
  }
`

//JSX

const headers = {
  headers: {
    Authorization: "laura-amancio-shaw",
  },
};

export default class TelaPlaylists extends React.Component {
  state = {
    playlists: [],
    inputNomePlaylist: "",
    idPlaylist: "",
    telaAtual: "playlists",
  };

  navegaTela = (idPlaylist) => {
    if (this.state.telaAtual === "playlists") {
      this.setState({ telaAtual: "infos", idPlaylist: idPlaylist });
    } else {
      this.setState({ telaAtual: "playlists", idPlaylist: "" });
    }
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  onChangeInputNomePlaylist = (event) => {
    this.setState({ inputNomePlaylist: event.target.value });
  };

  createPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.inputNomePlaylist,
    };
    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Oba! Playlist nova na área");
        this.setState({
          inputNomePlaylist: "",
        });
        this.getAllPlaylists();
      })
      .catch((err) => {
        alert("algo deu errado, tente de novo");
      });
  };

  getAllPlaylists() {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        alert(err.response);
      });
  }

  deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
      .delete(url, headers)
      .then(() => {
        alert("Playlist Apagada");
        this.getAllPlaylists();
      })
      .catch(() => {
        alert("Ops, algo deu errado");
      });
  };

  //cria uma função que vai me retornar um array, nessa função já posso emendar o .sort, pq aqui ele ta retornando esse array.
  //Lá, direto do map não consigo pq ele ta jogando o .sort em um JSX (em cima no <li>), então ele n entende.
  renderPlay = () => {
    return this.state.playlists.sort((currentUser, nextUser) => {
      return currentUser.name.localeCompare(nextUser.name);
    });
  };

  render() {
    return (
      <MainPlay>
        {this.state.telaAtual === "playlists" ? (
          <div>
            <h2>Sua Biblioteca</h2>
            <h3>Playlists</h3>
            <CardCriaPlay>
              <h4>Crie uma nova Playlist</h4>
              <input
                placeholder="Nome da Playlist"
                value={this.state.inputNomePlaylist}
                onChange={this.onChangeInputNomePlaylist}
              />
              <button onClick={this.createPlaylist}>Criar</button>
            </CardCriaPlay>
            {this.renderPlay().map((playlist) => {
              return (
                <CardPLaylists>
                  <ListaPlaylist
                    key={playlist.id}
                    onClick={() => this.navegaTela(playlist.id)}
                  >
                    {playlist.name}
                  </ListaPlaylist>
                  <button onClick={() => this.deletePlaylist(playlist.id)}>
                    Excluir
                  </button>
                </CardPLaylists>
              );
            })}
          </div>
        ) : (
          <TelaInfoPlaylist
            idPlaylist={this.state.idPlaylist}
            navegaTela={this.navegaTela}
          />
        )}
      </MainPlay>
    );
  }
}
