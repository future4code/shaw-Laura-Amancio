const nomeIdade = {
    nome: process.argv[2],
    idade: Number(process.argv[3],)
}

const idadeFutura = nomeIdade.idade + 7

console.log(`Olá ${nomeIdade.nome}! Você tem ${nomeIdade.idade} anos`),
console.log(`Olá ${nomeIdade.nome}! Você terá ${idadeFutura} anos em 7 anos`)

//DESAFIO

const query1 = process.argv[2]
const query2 = Number(process.argv[3])

const imprimeTerminal = (query1, query2) => {
    if( !query2 || !query1) {
            console.log("Parâmetros inválidos")
    }else{
        return (
            console.log('\x1b[45m%s\x1b[0m', `Olá ${query1}! Você tem ${query2} anos`),
            console.log('\x1b[33m%s\x1b[0m', `Olá ${query1}! Você terá ${query2 + 7} anos em 7 anos`)
        )
    }
}

imprimeTerminal( query1, query2)