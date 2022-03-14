function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  const novoArray = arrayDeNumeros.filter((numero) => {
    return numero === numeroEscolhido
  )}
  if (novoArray.includes(numeroEscolhido) === true){
    return `O numero ${numeroEscolhido} aparece ${novoArray.length}x.`
  }else{
    return `Numero não encontrado`
  }
}