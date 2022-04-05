
import React from "react";
import axios from "axios";

const headers = {
  headers: {
    Authorization: "laura-amancio-shaw"
  }
}

export default class App extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
    usuario: [],
  }


  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers(){
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url,headers)
    .then((res) => {
      this.setState({usuario: res.data})
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  createUser = () => {
    const urlCreate = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.inputName ,
      email: this.state.inputEmail
    }
    axios.post(urlCreate, body, headers)
    .then((res) => {
      this.getAllUsers();
      alert("Usuario criado")
      this.setState({
        inputEmail: "",
        inputName: "",
      })
    })
    .catch((err) => {
      alert(err.message)
    })
  }

  // deleteUser = (id) => {
  //   const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
  //   axios.delete(url, id , headers)
  //   .then((res) => {

  //   })
  // }

  onChangeInputName = (event) => {
    this.setState({inputName: event.target.value})
  }

  onChangeInputEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }


  render(){

    const renderizaListaUsuario = this.state.usuario.map((usuario) => {
      return <li key={usuario.id}>{usuario.name}</li>
    })

    return (
      <div>
        <button>Trocar de Tela</button>
        <br/>
        <input 
        placeholder="Nome"
        value={this.state.inputName}
        onChange={this.onChangeInputName}
        />
        <input 
        placeholder="Email"
        value={this.state.inputEmail}
        onChange={this.onChangeInputEmail}
        />
        <button onClick={this.createUser}>Criar Usuário</button>

        {renderizaListaUsuario}
      </div>
    )
  }
}