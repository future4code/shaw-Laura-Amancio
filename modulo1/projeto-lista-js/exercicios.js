// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
    let altura = prompt("me passa uma altura")
    let largura = prompt("me passa uma largura")
    const areaRetangulo = Number(altura) * Number(largura)

    console.log(areaRetangulo)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
    let anoAtual = prompt("que ano estamos?")
    let anoNascimento = prompt("que ano vc nasceu?")
    const idade = Number(anoAtual) - Number(anoNascimento)

    console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
    let imc = Number(peso) / Number((altura *altura))

    return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    let nome = prompt("Qual seu nome?")
    let idade = prompt("Qual sua idade?")
    let email = prompt("Qual seu email?")

    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
    const corUm = prompt("Qual sua cor favorita?")
    const corDois = prompt("Qual sua 2ª cor favorita?")
    const corTres = prompt("Qual sua 3ª cor favorita?")
    const coresFavoritas = [corUm, corDois, corTres]

    console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
    const stringMaiuscula = string.toUpperCase()

    return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
    const quantidadeIngressos = custo / valorIngresso
    
    return quantidadeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
    const tamanhoString1 = string1.length
    const tamanhoString2 = string2.length
    const comparacao = tamanhoString1 === tamanhoString2

    return comparacao
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
    const primeiroElemento = array[0]

    return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
    const elementos = array.length
    const ultimoElemento = array[elementos-1]

    return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
    const elementos = array.length
    let ultima = array[elementos-1]
    let primeiro = array[0]
    // let c = ultima
    // let d = primeiro
    array[0] = ultima
    array[elementos-1] = primeiro

    return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
    let string1Minusculas = string1.toLowerCase()
    let string2Minusculas = string2.toLowerCase()
    let comparacao = string1Minusculas === string2Minusculas

    return comparacao
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
    const multiplo400 = ano % 400
    const resultadoMultiplo400 = multiplo400 === 0

    const multiplo4 = ano % 4
    const resultadoMultiplo4 = multiplo4 === 0
    
    const multiplo100 = ano % 100
    const resultadoMultiplo100 = multiplo100 === 0

    let resultadoFinal = resultadoMultiplo400 || resultadoMultiplo4 && ! resultadoMultiplo100
    
    return resultadoFinal
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
    const idade = prompt("Você tem mais de 18 anos?")
    const medio = prompt("Você possui ensino médio completo?")
    const horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

    let idadeSim = idade.toLowerCase().includes("sim")
    let medioSim = medio.toLowerCase().includes("sim")
    let horarioSim = horario.toLowerCase().includes("sim")

    let resultado = idadeSim && medioSim && horarioSim

    console.log(resultado)
}