import UserAccount from "./data/UserAccount"
// EXERCÍCIO 1
// a) O costructor é usado na inicialização das instancias, recebe parametros como obrigatoriedade na formação da classe.
//    É chamado na criação de uma nova instância, que o referencia.

// b) 
const user = new UserAccount('422914666', "Laura", 25)
console.log(user)
// Foi impresso apenas uma vez a mensagem.

// c) Usamos o Getter para ter acesso as propriedades privadas.

