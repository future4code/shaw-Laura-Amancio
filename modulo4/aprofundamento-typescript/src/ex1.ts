let minhaString: string = "aoba"
// minhaString = 25
// a) O Typescript não permite que eu atribua um numero a variável minhaString, pois esta foi tipificada como string, logo ela SÓ reconhece valores de string.

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let meuNumero: number = 25
// b) a melhor forma de fazer com que uma variável receba mais de um valor tipificado é usando o Union Type, que funciona como OU. 
//    É simbolizado pelo | como no ex abaixo:
let meuNumStrg: number | string;
meuNumStrg = 25
meuNumStrg = "aoba"

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// c)

const pessoa1: {nome: string, idade: number, corFavorita:string } = {
    nome: "Laura",
    idade: 25,
    corFavorita: "Amarelo"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa2: Pessoa = {
    nome: "Roberval",
    idade: 15,
    corFavorita: "Azul"
}

const pessoa3: Pessoa = {
    nome: "Maria",
    idade: 65,
    corFavorita: "Vermelho"
}

// -------------------------------------------------------------------------------------------------------------------------

// d)

enum CoresArcoiris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    ROXO = "Roxo"
}

type pessoaEnum = {
    nome: string,
    idade: number,
    corFavorita: CoresArcoiris
}

const pessoa4: pessoaEnum = {
    nome: "Brenda",
    idade: 25,
    corFavorita: CoresArcoiris.ROXO
}