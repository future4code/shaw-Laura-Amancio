import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
`
const IconImage = styled.img`
	margin-right: 5px;
`

export function IconeComContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
}

//IconeComContador representa bem o icon de coração e comentário que aparece no footer do card. Este icon recebe várias propriedades uque na pasta Post.js são colocadas e ai especifica no caso do core e no caso do balão.