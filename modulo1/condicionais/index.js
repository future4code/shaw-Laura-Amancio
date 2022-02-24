// Exercícios de interpretação de código --------------------------------------------------------------

// 1)
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) o código pega esse numero e ve se a sobre dele dividido por 2 é igual a zero. Se for igual,
//    aparece a mensagem "Passou no teste", se for diferente de 0, "Não passou no teste"

// b) Números pares inteiros

// c) Para qualquer outro número que não seja Par e inteiro

// 2)
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para a pessoa procurar o nome da fruta e receber o preço dela como resposta.

// b) O preço da fruta, maça, é, R$ 2.25

// c) O preço da fruta, Pêra, é, R$ 5

// 3
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) Pedindo ao usuário para digitar o primeiro número e com o Number fazendo ele ter a função de Number mesmo.

// b) 10 = Esse numero passou no teste -10 = mensagem not defined

// c) Sim, pois o que está sendo chamada para números que não entram na categoria maior que 10 está
//    sendo definido dentro do escopo do if, e essa chama do console.log está fora, logo o que está 
//    na parte de fora, não tem acesso as informações de dentro, dando essa falha de "não definido".

// Exercícios de escrita de código -------------------------------------------------------------------------------------------

// 1) 

const idade = Number(prompt("Qual sua idade?"))

if (idade >= 18){
    console.log(`Você pode dirigir`)
}else{
    console.log(`Você não pode dirigir`)
}

// 2)

const turno = prompt("Qual turno você estudo? M (matutino, V (Vespertino) N (Noturno")

if (turno === "M"){
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N") {
    console.log("Noa noite!")
}

// 3)
const turno = prompt("Qual turno você estudo? M (matutino, V (Vespertino) N (Noturno")

switch(turno){
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Boa tarde!")
        break
    case 'N':
        console.log("Boa noite!")
        break
}

// 4)
const genero = prompt("Qual genero do filme?")
const valor = Number(prompt("Qual valor do ingresso?"))

if (genero === 'fantasia' && valor < 15){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}


// DESAFIOS--------------------------------------------------------------------------------------------------

// 1)
const genero = prompt("Qual genero do filme?")
const valor = Number(prompt("Qual valor do ingresso?"))

if (genero === 'fantasia' && valor < 15){
    console.log("Bom filme!")
    const lanchinho = prompt("Qual lanchinho escolhido?")
    console.log(`Aproveite seu ${lanchinho}!`)
}else{
    console.log("Escolha outro filme :(")
}

