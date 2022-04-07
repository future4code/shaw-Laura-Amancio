import React from "react";
import TelaPlaylists from "./components/TelaPlaylists"
import TelaInfoPlaylist from "./components/TelaInfoPlaylist"

export default class App extends React.Component {
  state={
    telaAtual: "playlists",
    idPLaylists:""
  }

  navegaTela = () => {
    switch (this.state.telaAtual) {
      case "playlists":
        return <TelaPlaylists irParaInfos={this.irParaInfos} idPlaylist={this.state.idPLaylists}/>
      case "infos":
        return <TelaInfoPlaylist irParaPlaylists={this.irParaPlaylists}/>
      default:
        return "Página não encontrada :("
    }
  }

  irParaPlaylists = () => {
    this.setState({telaAtual: "playlists"})
  }

  irParaInfos = () => {
    this.setState({telaAtual: "infos"})
  }

  render(){

    return(
      <div>
        {this.navegaTela()}
      </div>
    )
  }
}