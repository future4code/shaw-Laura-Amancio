import React from "react"
import { Typography } from "@material-ui/core";
import { ErrorPageContainer } from './styled'

function ErrorPage() {
  return (
    <ErrorPageContainer>
      <Typography color={"primary"} variant={"h4"} align={"center"}>Erro 404 - Página Não Encontrada </Typography>
    </ErrorPageContainer>
  )
}

export default ErrorPage;