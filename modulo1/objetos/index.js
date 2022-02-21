// Exercícios de interpretação de código --------------------------------------------------------------------------------------------------------------------------------------------------------

// 1)
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) Matheus Nachtergaele
//    Virginia Cavendish
//    {canal: "Globo", horario: "14h"}

// 2)
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) {nome: Juca Idade: 3 raca: SRD}
//    {nome: Juba idade 3 raca: SRD}
//    {nome: Jubo idade 3 raca SRD}

// b) é chamada de Espalhamento ou Spread, tem a função de adicionar ou substituir um elemento do objeto ou array deste objeto

// 3)
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) false 
//    undefined

// b) o primeiro veio correto, pois ele chama a função e os objetos daquela função. No primeiro temos a propriedade chamada dentro do objeto "pessoa", logo retorna o valor indicado.
//    já na segunda, essa propriedade do objeto não existe (ou não está indicada), logo ele me retorna um valor indefinido

// Exercícios de escrita de código --------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1)
// a-
const pessoa = {
    nome: "Laura" ,
    apelidos: ["Lau", "Glade", "Lala"]
}


function mensagem(objeto){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}

// mensagem(pessoa)

// b-
const novoApelido = {
    ...pessoa,
    apelidos: ["Glades", "Gladoka", "La"],
}
mensagem(novoApelido)

// 2)

// const pessoaUm = {
//     nome: "Cida",
//     idade: 60,
//     profissao: "Arquiteta",
// }

// const pessoaDois = {
//     nome: "Marcos",
//     idade: 25,
//     profissao: "ator"
// }

// function novaArray(objeto){
//     const resultado = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
//     return resultado
// }

// console.log(novaArray(pessoaUm))
// console.log(novaArray(pessoaDois))

// Jeito desnecessário:
// function valoresPedidosUm(pessoa){
//     const valorNome = pessoaUm.nome
//     const caracteresNome = pessoaUm.nome.length
//     const valorIdade = pessoaUm.idade
//     const valorProfissao = pessoaUm.profissao
//     const caracteresProfissao = pessoaUm.profissao.length
//     const resultado = [valorNome, caracteresNome, valorIdade, valorProfissao, caracteresProfissao]
//     return resultado
// }

// console.log(valoresPedidosUm(pessoaUm))


// 3)

// const carrinho = []

// const primeiraFruta = {
//     nome: "Abacate",
//     disponibilidade: true,
// }

// const segundaFruta = {
//     nome:"Mamão",
//     disponibilidade: true,
// }

// const terceiraFruta = {
//     nome:"Banana",
//     disponibilidade: true,
// }

// function novoArray(objeto) {
//     const FrutasnoArray = carrinho.push(objeto)
//     return FrutasnoArray
// }

// novoArray(primeiraFruta)
// novoArray(segundaFruta)
// novoArray(terceiraFruta)

// console.log(carrinho)