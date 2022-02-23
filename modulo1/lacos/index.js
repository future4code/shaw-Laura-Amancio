// Exercícios de interpretação de código -----------------------------------------------------------------------------

// 1)
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// R: Ele pega os numeros que são menores que 5 e vai somando com o valor anterior (valor = valor + i). Então fica 0+0, depois 0+1, 1+2, 3+3 e 6+4.
//    Para aqui pois a condição é i ser numeros menores que 5, então ele sai do for e imprime no console o valor.
//    Este valor impresso no console é: 10 

// 2)
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) 19, 21, 23, 25, 27, 30
// b)Sim, era apenas não colocar uma condição if e manter o console.log(numero), assim ele imrpimiria todos os indices.

// 3)
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// R: *
//    **
//    ***
//    ****

// Exercícios de escrita de código -----------------------------------------------------------------------------------------------------------------------

// 1)Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse
//  dado em uma variável. 
    
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar 
// um pet!"
    
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes
//  deles, um por um, e guarde esses nomes em um array

// c) Por fim, imprima o array com os nomes dos bichinhos no console

// const bichosUsuario = Number(prompt("Quantos buchinhos de estimação vc tem?"))
// let arrayBichos = []
// let contador = 0 // no de baixo usei i (indice)

// if (bichosUsuario === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// }else if(bichosUsuario > 0){
//     while(contador < bichosUsuario){
//         nomes = prompt("Qual nome dos bichinhos?");
//         arrayBichos.push(nomes);
//         contador = contador + 1 //i++
//     }
//     console.log(arrayBichos)
// }

// for(let i = 0; i < bichosUsuario; i++){
//     let nome = prompt("Qual nome dos bichinhos?")
//     nomeBichos.push(nome)
// }

// 2)

const arrayOriginal = [10, 2, 58, 44, 46, 1, 85, 95, 48, 69, 77, 102, 118, 13, 56]

// a)
// function imprimir(array){
//     for(let numero of array){
//         console.log(numero)
//     }
// }
// imprimir(arrayOriginal)

// b)
// function dividido10(array){
//     for(let numero of array){
//     console.log(numero/10)
//     }
// }
// dividido10(arrayOriginal)

// c)
// function numerosPares(array){
//     for(let numero of array){
//         if(numero % 2 === 0){
//             let novaArray = [];
//             novaArray.push(numero);
//             console.log(novaArray)
//         }
//     }
// }
// numerosPares(arrayOriginal)

// d)

// e)
