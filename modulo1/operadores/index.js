//Exercícios de interpretação de código

// 1)
// a. false
// b. false
// c. true
// d. booleans

// 2)   Na subtração o computador não consegue subtrair strings, então ele entende
//  automático como número (por isso da certo), mas qundo é soma ele consegue "somar" strings então ele concatena e não soma.
//  É preciso então, especificar que é um número. (transformar string em número).
//  Será impresso no console os numeros digitados porém sem somá-los

// 3)
const primeiroNumero = prompt("Digite um numero!");
const segundoNumero = prompt("Digite outro numero!");

let soma = Number(primeiroNumero) + Number(segundoNumero);

console.log(soma);

//Exercícios de escrita de código

//  1)
const idade = prompt("Qual sua idade?");
const idadeAmigo = prompt("Qual a idade do seu melhor amigo(a)?");
let diferencaIdade = Number(idade) - Number(idadeAmigo);
console.log(
  "Sua idade é maior do que a do seu melhor amigo?",
  idade > idadeAmigo
);
console.log(diferencaIdade);
//  2)
const numeroPar = prompt("Insira um número PAR");
let numeroDivisao = Number(numeroPar) % Number(2);
console.log(numeroDivisao);
// // d) Todos os resultados são zero, pois é uma verdade absoluta que
// //    todo número par é divisível por 2 de forma inteira (sem resto).
// // e) Todos os resultados dão um (1), pois consigo dividir qualquer
// //    número por 2 e sempre sobra 1

//  3)
const idadeAnos = prompt("Qual sua idade? (em anos)");
let idadeMeses = Number(idadeAnos) * Number(12);
let idadeDias = Number(idadeMeses) * Number(30);
let idadeHoras = Number(idadeDias) * Number(24);

console.log("idade em meses:", idadeMeses);
console.log("idade em Dias:", idadeDias);
console.log("idade em horas:", idadeHoras);

//  4)
const numeroUm = prompt("Digite um numero");
const numeroDois = prompt("Digite outro número");

let maior = Number(numeroUm) > Number(numeroDois);
let igual = Number(numeroUm) === Number(numeroDois);
let inteiroPrimeiro = Number(numeroUm) % Number(numeroDois);
let inteiroSegundo = Number(numeroDois) % Number(numeroUm);

console.log("O primeiro numero é maior que segundo?", maior);
console.log("O primeiro numero é igual ao segundo?", igual);
console.log(
  "O primeiro numero é divisível pelo segundo?",
  inteiroPrimeiro === 0
);
console.log(
  "O segundo numero é divisível pelo primeiro?",
  inteiroSegundo === 0
);
