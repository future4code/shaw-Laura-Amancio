import React from "react";
import axios from "axios";

const headers = {
    headers: {
      Authorization: "laura-amancio-shaw",
    },
  };


export default class TelaPlaylists extends React.Component{
    state = {
        playlists: [],
        inputNomePlaylist: ""
    }

    componentDidMount() {
        this.getAllPlaylists();
    }

    onChangeInputNomePlaylist = (event) =>{
        this.setState({inputNomePlaylist: event.target.value})
    }

    createPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.inputNomePlaylist
        }
        axios.post(url, body, headers)
        .then((res) =>{
            alert("Oba! Playlist nova na área")
            this.setState({
                inputNomePlaylist: ""
            })
            this.getAllPlaylists()
        })
        .catch((err) =>{
            alert("algo deu errado, tente de novo")
        })
    }

    getAllPlaylists() {
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, headers)
        .then((res) => {
            this.setState({playlists: res.data.result.list})
        })
        .catch((err) => {
            alert(err.response)
        })
    }

    //cria uma função que vai me retornar um array, nessa função já posso emendar o .sort, pq aqui ele ta retornando esse array. 
    //Lá, direto do map não consigo pq ele ta jogando o .sort em um JSX (em cima no <li>), então ele n entende.
    renderPlay = () => {
        return this.state.playlists
        .sort((currentUser, nextUser) => {
                return currentUser.name.localeCompare(nextUser.name)
                })
    }

    render(){
        const renderizaPlaylists = this.renderPlay().map((playlist) => {
            return (
                <li 
                key={playlist.id}
                idPlaylist
                >
                    {playlist.name}
                    <button onClick={this.props.irParaInfos}>Ver</button>
                </li>
            )
         })//.sort((currentUser, nextUser) => {
        //     return this.currentUser.name.localeCompare(nextUser.name)
        // }) - ERRADO
        return(
            <div>
                <h3>Lista de Playlists</h3>
                <div>
                    <h4>Crie uma nova Playlist!</h4>
                    <input 
                    placeholder="Nome da Playlist"
                    value={this.state.inputNomePlaylist}
                    onChange={this.onChangeInputNomePlaylist}
                    />
                    <button onClick={this.createPlaylist}>Criar</button>
                </div>
                <ul>
                    {renderizaPlaylists}
                </ul>
            </div>
        )
    }
}