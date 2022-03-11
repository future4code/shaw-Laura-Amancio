// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const novoArray = array.filter((numero) => {
    return numero % 2 === 0;
  });
  return novoArray;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const novoArray = array
    .filter((numero) => {
      return numero % 2 === 0;
    })
    .map((numero) => {
      return numero * numero;
    });
  return novoArray;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = - Infinity
    for (let numero of array){
        if(numero > maior){
            maior = numero
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objeto = {
        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
        diferenca: Math.max(num1, num2) - Math.min(num1, num2)
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for(let i = 0; numerosPares.length < n; i++)
    if(i % 2 ===0){
        numerosPares.push(i)
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if((ladoA === ladoB) && (ladoB === ladoC) && (ladoC === ladoA)){
    return "Equilátero"
  }else if((ladoA !== ladoB) && (ladoB !== ladoC) && (ladoC !== ladoA)){
    return "Escaleno"
  }else{
    return "Isósceles"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a-b)
    const segundoMenor = array[1]
    const segundoMaior = array[array.length -2]
    return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const atoresString = filme.atores.join(', ')
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresString}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonima = {
        ...pessoa,
        nome: "ANÔNIMO",
    }
    return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter((pessoa) => {
        return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60
    })
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
      return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60
    })
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach((conta) => {
      let totalDeCompra = 0

      conta.compras.forEach((compra) => {
        totalDeCompra = totalDeCompra + compra
      })

    conta.compras = []
    conta.saldoTotal = conta.saldoTotal - totalDeCompra
    })

  return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort((a, b) => {
    if(a.nome > b.nome){
      return 1
    }else if(a.nome < b.nome){
      return -1
    }else{
      return 0
    }
  })
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}