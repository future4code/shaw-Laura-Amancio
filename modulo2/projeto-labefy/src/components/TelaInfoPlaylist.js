import React from "react";

export default class TelaInfoPlaylist extends React.Component{

    state={
        inputNomeMusica:"",
        inputArtista:"",
        inputUrl:"",
        musicas: [],
    }

    addTrackToPlaylist = (id) => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
        const body = {
            name: this.state.inputNomeMusica, 
            artist: this.state.inputArtista,
            url: this.state.inputUrl
        }
    }

    render(){
        return(
            <div>
                <h2>Informações da Playlist</h2>
                <h3>Nome da Playlist</h3>
                <h4>Adicione Músicas ;)</h4>
                <input 
                placeholder="Nome da Música"
                value={this.state.inputNomeMusica}
                onChange={this.onChangeInputNome}
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
                <button>Adicionar Música</button>
                <br/>
                <button onClick={this.props.irParaPlaylists}>Voltar</button>
            </div>
        )
    }
}