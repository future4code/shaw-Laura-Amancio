// Exercícios de interpretação de código

// 1)
// a) 10 e 50
// b) não apareceria nada, pois em nenhum lugar teve
//  algum comando que aparecesse o resultando, mesmo com o return

// 2)

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)
// console.log()

// a) Ela pega o texto digitado pelo usuário, coloca todo em letra
//  minuscula e identifica (true ou false) se consta a palavra "cenoura" 
// nesse texto. Além disso retorna esse comando para ações futuras.


// b) i. true
// ii. true
// iii. false

// Exercícios de escrita de código

// 1)
// a)
function minhaInfo() {
    console.log("Eu sou a Laura, tenho 25 anos, moro em Jundiaí e sou estudante")
}
minhaInfo() 

// b)
let nomeUsuario = prompt("Qual seu nome?")
let idadeUsuario = prompt("Qual sua idade?")
let cidadeUsuario = prompt("Qual sua cidade?")
let profissaoUsuario = prompt("Qual sua profissão?")

function unificar (nome, idade, cidade, profissao){
    const fraseConcat = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
    return fraseConcat
}

console.log(unificar(nomeUsuario, idadeUsuario, cidadeUsuario, profissaoUsuario))

// 2)
// a)
function soma (numero1, numero2){
    let somaNumeros = numero1 + numero2
    return somaNumeros
}

console.log(soma(1,2))

// b)
function comparacao (numero1, numero2){
    let numeroComparado= numero1 >= numero2
    return numeroComparado
}

console.log(comparacao(5,6))

// c)
function par (numero){
    let divisao = numero % 2
    let resultado = divisao === 0
    return resultado
}

console.log(par(5))

// d)
let mensagemUsuario = prompt("Deixe sua mensagem")
function mensagem (texto){
    const tamanho = texto.length
    const mensagemFormatada = texto.toUpperCase()
    return `${tamanho}, ${mensagemFormatada}`
}

console.log(mensagem(mensagemUsuario))

// 3)
function soma (numero1, numero2){
    const resultadoSoma = Number(numero1) + Number(numero2)
    return `Soma: ${resultadoSoma}`
}

function subtracao (numero1, numero2){
    const resultadoSubtracao = Number(numero1) - Number(numero2)
    return `Diferença: ${resultadoSubtracao}`
}

function multiplicacao (numero1, numero2){
    const resultadoMultiplicacao = Number(numero1) * Number(numero2)
    return `Muntiplicação: ${resultadoMultiplicacao}`
}

function divisao (numero1, numero2){
    const resultadoDivisao = Number(numero1) / Number(numero2)
    return `Divisão ${resultadoDivisao}`
}

let numeroUsuario1 = prompt("Digite um numero")
let numeroUsuario2 = prompt("Digite outro numero")

console.log(`Números inseridos: ${numeroUsuario1} e ${numeroUsuario2}`)
console.log(soma(numeroUsuario1, numeroUsuario2))
console.log(subtracao(numeroUsuario1, numeroUsuario2))
console.log(multiplicacao(numeroUsuario1, numeroUsuario2))
console.log(divisao(numeroUsuario1, numeroUsuario2))