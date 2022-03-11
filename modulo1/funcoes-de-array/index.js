// Exercícios de interpretação de código-------------------------------------------------------------------

// 1)
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// a) Vai mostrar todos os objetos e itens dentro do array (nomes: amanda, laís, letícia e apelidos: mandi
//    Laura, chijo. Mostra também o número de elementos dentro do array: 0, 1, 2.
//    Por último mostra a array completa junto de de seus itens e objetos. Porém em todos vai mostrar sempre
//    no formato de array, pois nenhum dos 3 foi melhor especificado.

// 2)
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

// a) Vai retornar um novo array mas apenas com os nomes da const usuario.

// 3)
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
  
// a) Vai retornar um array com apelidos diferentes de chijo, logo: [Amanda Mandi, Lais Laura]

// Exercícios de escrita de código ----------------------------------------------------------------------------------

// 1) 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// //  a)
const nomesPetsArray = pets.map((pet)=>{
    return pet.nome
})
console.log(nomesArray)

// // b)
const salsichasArray = pets.filter((pet)=>{
    return  pet.raca === "Salsicha"
})
console.log(salsichasArray)

// // c)
const poodlesArray = pets.filter((pet)=>{
    return pet.raca === "Poodle"
}).map((pet)=> console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`))

// 2)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a)
const nomeProdutosArray = produtos.map((produto)=>{
    return produto.nome
})
console.log(nomeProdutosArray)

// b)
const descontoArray = produtos.map((produto)=>{
    return {
        nomeProduto: produto.nome,
        precoProduto: (produto.preco * 0.95).toFixed(2) //esse fixed arredonda
    }
})
console.log(descontoArray)

// c)
const bebidasArray = produtos.filter((produto)=>{
    return produto.categoria === "Bebidas"
})
console.log(bebidasArray)

// d)
const ypeArray = produtos.filter((produto)=>{
    return produto.nome.includes("Ypê")
})
console.log(ypeArray)

// e)
const ypeMensagem = produtos.filter((produto)=>{
    return produto.nome.includes("Ypê")
}).map((produto)=>{
    console.log(`Compre ${produto.nome} por ${produto.preco}`)
})