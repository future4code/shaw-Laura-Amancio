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
  return array.prototype.sort();
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

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return "Equilátero"
    }else if(ladoA === ladoB && ladoA !== ladoC || ladoA !== ladoB && ladoA === ladoC){
        return "Isóceles"
    }else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const atoresString = filme.atores.join(', ')
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresString}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    // função de array map ou filter criam um novo array, posso usar então o for e forEach (faz uma função ali dentro)
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}