//Exercícios de interpretação de código

// 1)
// let array
// console.log('a. ', array)
// a. indefinido (não tem nada na array)

// array = null
// console.log('b. ', array)
// b. nulo (array está vazia)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// c. 11 (número de elementos dentro da array)

// let i = 0
// console.log('d. ', array[i])
// d. 3 (aparece o primeiro elemento da array)

// array[i+1] = 19
// console.log('e. ', array)
// e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

// const valor = array[i+6]
// console.log('f. ', valor)
// f. 9

// 2)
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// Resposta: SUBI NUM ONIBUS EM MIRROCOS 27

// Exercícios de escrita de código

// 1)
let nomeUsuario = prompt("Qual seu nome?")
let emailUsuario = prompt("Qual seu email?")
let frase = `O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`
console.log(frase)

// 2)

let arrayComidas = ["feijão", "estrogonofe", "pizza", "moqueca", "bolinho do lu"]
// a)
console.log(arrayComidas)
// b)
console.log(`Essas são as minhas comidas favoritas: ${arrayComidas [0]}`)
console.log(arrayComidas [1])
console.log(arrayComidas [2])
console.log(arrayComidas [3])
console.log(arrayComidas [4])

// c)
let comidaUsuario = prompt("Qual a sua comida favorita?")
let i = 0
arrayComidas [i+1] = comidaUsuario
console.log("sua comida na minha lista:", arrayComidas)

// 3)
let listaDeTarefas = [];
let tarefaUm = prompt("Digite uma tarefa sua desse dia?");
let tarefaDois = prompt("Digite outra tarefa sua desse dia?");
let tarefaTres = prompt("Digite a última tarefa sua desse dia?");
listaDeTarefas.push(tarefaUm, tarefaDois, tarefaTres);
console.log(listaDeTarefas);
let indiceTarefa = prompt(
  "Indique o Índice da tarefa que você  já completou (0 a 2)"
);
listaDeTarefas.splice(indiceTarefa, 1);
console.log(listaDeTarefas);