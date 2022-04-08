import React from "react";
import axios from "axios";
import TelaInfoPlaylist from "./TelaInfoPlaylist";

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
      this.setState({ telaAtual: "infos", idPlaylist: idPlaylist});
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

  deletePlaylist = (id) =>{
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
          axios.delete(url, headers)
          .then(() => {
              alert("Playlist Apagada")
              this.getAllPlaylists()
          })
          .catch(() => {
              alert("Ops, algo deu errado")
          })
  }

  //cria uma função que vai me retornar um array, nessa função já posso emendar o .sort, pq aqui ele ta retornando esse array.
  //Lá, direto do map não consigo pq ele ta jogando o .sort em um JSX (em cima no <li>), então ele n entende.
  renderPlay = () => {
    return this.state.playlists.sort((currentUser, nextUser) => {
      return currentUser.name.localeCompare(nextUser.name);
    });
  };

  render() {
    return (
      <div>
          {this.state.telaAtual === "playlists" ? (
              <div>
                  <h4>Crie uma nova Playlist</h4>
                  <div>
                  <input
                    placeholder="Nome da Playlist"
                    value={this.state.inputNomePlaylist}
                    onChange={this.onChangeInputNomePlaylist}
                    />
                    <button onClick={this.createPlaylist}>Criar</button>
                    {this.renderPlay().map((playlist) =>{
                        return (
                            <li key={playlist.id}>
                                {playlist.name}
                                <button onClick={() => this.navegaTela(playlist.id)}>Ver</button>
                                <button onClick={() => this.deletePlaylist(playlist.id)}>Apagar</button>
                            </li>
                        )
                    })}
                  </div>
              </div>
          ) : (
              <TelaInfoPlaylist idPlaylist={this.state.idPlaylist} navegaTela={this.navegaTela}/>
          )}
      </div>
    );
  }
}
