import React from "react";
import TelaPlaylists from "./components/TelaPlaylists"
import TelaInfoPlaylist from "./components/TelaInfoPlaylist"
import Header from "./components/header";
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default class App extends React.Component {
  state={
    telaAtual: "playlists",
  }

  navegaTela = () => {
    switch (this.state.telaAtual) {
      case "playlists":
        return <TelaPlaylists irParaInfos={this.irParaInfos}/>
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
    this.setState({telaAtual: "infos", })
  }

  render(){

    return(
      <div>
        <GlobalStyle />
        <Header/>
        {this.navegaTela()}
      </div>
    )
  }
}