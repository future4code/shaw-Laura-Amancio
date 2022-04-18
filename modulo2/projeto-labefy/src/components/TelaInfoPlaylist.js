import axios from "axios";
import React from "react";
import styled from "styled-components";

const CardMusica = styled.div `
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const headers = {
  headers: {
    Authorization: "laura-amancio-shaw",
  },
};

export default class TelaInfoPlaylist extends React.Component {
  state = {
    inputNomeMusica: "",
    inputArtista: "",
    inputUrl: "",
    musicas: [],
    telaAtual: "infos",
    play: false
  };

  onChangeInputNomeMusica = (event) => {
    this.setState({ inputNomeMusica: event.target.value });
  };

  onChangeInputArtista = (event) => {
    this.setState({ inputArtista: event.target.value });
  };

  onChangeInputUrl = (event) => {
    this.setState({ inputUrl: event.target.value });
  };

  componentDidMount() {
    this.getPlaylistTracks();
  }

  getPlaylistTracks = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`;
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ musicas: res.data.result.tracks });
      })
      .catch((err) => {
       alert("algo deu errado")
      });
  };

  addTrackToPlaylist = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`;
    const body = {
      name: this.state.inputNomeMusica,
      artist: this.state.inputArtista,
      url: this.state.inputUrl,
    };
    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Oba, musica add");
        this.setState({
          inputNomeMusica: "",
          inputArtista: "",
          inputUrl: "",
        });
        this.getPlaylistTracks();
      })
      .catch((err) => {
        alert("ops, algo deu errado");
      });
  };

  removeTrackFromPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks/${id}`;
    axios
      .delete(url, headers)
      .then((res) => {
        alert("Música Apagada!");
        this.getPlaylistTracks();
      })
      .catch((err) => {
        alert("ops, algo deu errado!");
      });
  };

  render() {
    const renderizaMusicas = this.state.musicas.map((musica) => {
      return (
        <CardMusica>
          <li key={musica.id}>
            {musica.name}
            <br />
            {musica.artist}
            <br />
            <audio  controls="controls" src={musica.url} type="audio/mp3"></audio>
            <button onClick={() => this.removeTrackFromPlaylist(musica.id)}>
              Apagar
            </button>
          </li>
        </CardMusica>
      );
    });
    return (
      <div>
        <h2>Informações da Playlist</h2>
        <h4>Adicione Músicas ;)</h4>
        <input
          placeholder="Nome da Música"
          value={this.state.inputNomeMusica}
          onChange={this.onChangeInputNomeMusica}
        />
        <input
          placeholder="Nome do Artista"
          value={this.state.inputArtista}
          onChange={this.onChangeInputArtista}
        />
        <input
          placeholder="URL da Música"
          value={this.state.inputUrl}
          onChange={this.onChangeInputUrl}
        />
        <button onClick={() => this.addTrackToPlaylist(this.props.idPlaylist)}>
          Adicionar Música
        </button>
        <br />
        {renderizaMusicas}
        <button onClick={this.props.navegaTela}>Voltar</button>
      </div>
    );
  }
}
