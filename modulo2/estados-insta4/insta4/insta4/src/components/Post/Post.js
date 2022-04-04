import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component { //extends é padrão?
  state = {
    curtido: false, //utilizado no if do icone, se for curtido se torna true e fica preto
    numeroCurtidas: 0, //usado como valor da propriedade valorContador
    comentando: false, // utilizado no onclicl, qnd clicado fica true
    numeroComentarios: 0 // função de enviar comentário que soma +1 ao seu valor anterior
  }

  onClickCurtida = () => { //apenas aparece no console a mensagem "curtiu" x a qnt de x q eu curti
    this.setState({
      curtido: !this.state.curtido
    })
    if (this.state.curtido == true){
      this.state.numeroCurtidas = this.state.numeroCurtidas -1 //aqui é menos pq o último estado dele era true, ENTÃO ELE JÁ TA PRETO, SE JA TA PRETO JA CONTOU E NUM É MAIS PRA FICAR SE VC CLICAR,VAAAAI!!!!!
    }else{
      this.state.numeroCurtidas = this.state.numeroCurtidas +1
    }
    console.log('Curtiu!')
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando //! inverte a preposição false
    })
  }

  aoEnviarComentario = () => { //usada no componente comentário linha 77, ou seja, qnd é acionado com Onclick essa sessão, ele puxa o SecaoComentario que foi importado com a ação a ser feita e a props indicada aqui.
    this.setState({
      comentando: false,  //qq é isso? pq ele ta aqui = em cima
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) { //mas aqui no if ele n ta false? n seria branco? ta errado kkk
      iconeCurtida = iconeCoracaoPreto 
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) { //SecaoComent foi importado de algm lugar 
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador 
          icone={iconeCurtida} //coraçãozinho, vem da curtida mesmo, se curte fica preto. Pra onde ele vai n sei ainda, mas se pa ele soma as curtidas 
          onClickIcone={this.onClickCurtida} //aqui é a função do clicar e ai mudar a cor do coração e somar a curtida
          valorContador={this.state.numeroCurtidas} // aqui ele vai somando o numero de curtidas que aparece ali do lado do core. veio do inicial 0
        />

        <IconeComContador
          icone={iconeComentario} //mesma coisa do core, é uma imagem importada. ela que muda com as funções abaixo
          onClickIcone={this.onClickComentario} //função que inverte o false de curtido lá. se clicar fica true
          valorContador={this.state.numeroComentarios} // local que aparece a soma dos comentários da função lá de cima
        />
      </PostFooter>
      {componenteComentario}

    </PostContainer>
  }
}

export default Post