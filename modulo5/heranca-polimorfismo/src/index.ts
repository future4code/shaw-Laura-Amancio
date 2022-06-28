import User from "./Herança/User";
import Customer from "./Herança/Customer";
import { Client } from "./Polimorfismo/Client";
import { Residence } from "./Polimorfismo/Residence";
import { Commerce } from "./Polimorfismo/Commerce";
import { Industry } from "./Polimorfismo/Industry";
import { ResidentialClient } from "./Polimorfismo/ResidentialClient";
import { CommercialClients } from "./Polimorfismo/CommercialClient";
import { IndustryClient } from "./Polimorfismo/IndustryClient";
// HERANÇA ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// EXERCÍCIO 1
const laura = new User('1', 'laura@gmail.com', 'Laura', '1234')
console.log(laura.getName(), laura.getEmail(), laura.getId())
console.log(laura)

//a) Apenas a senha não consigo imprmir no console, porém quando imprimo a const laura, vem com a senha.
//b) Foi impressa apenas uma vez.

// EXERCÍCIO 2
const roberval = new Customer('2', 'ro@gmail.com', 'Roberval', '123', '1234567')
console.log(roberval)

//a) Apareceu uma vez, após os de User.
//b) Apareceu 2 vezes, pois antes de chamar o Customer, ele chama e monta o pai, que por sua vez acaba sendo chamado 2 vezes (um em cada criação).

// EXERCÍCIO 3
console.log(roberval.getCreditCard())
console.log(roberval.getName())
// a) Não seria possível,pois a senha é privada e pode-se ter acesso a ela apenas dentro da própria classe.

// EXERCÍCIO 4
console.log(roberval.introduceYourself())

// POLIMORFISMO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// EXERCÍCIO 1

const client: Client = {
    name: 'Laura',
    registrationNumber: 1,
    consumedEnergy: 2,
    calculateBill(){
        return 2
    }
}

console.log(client.calculateBill())
console.log(client.name)

// a)Consigo imprimir todas as informações, pois não foi definido se são públicas ou privadas, logo, por default elas são públicas.

// EXERCÍCIO 2
// a)
// const lugar = new Place()
// Ele me informa que não é possível criar uma instância de uma classe abstrata.

// b) Acredito que seria necessário uma nova classe que o chame com extends ou increment para poder acessar as informações.

// EXERCÍCIO 3

const casinha = new Residence(3, '13209666')
const trabalho = new Commerce(20, '345678')
const industria = new Industry(5, '3456789')

console.log(casinha.getCep(), industria.getCep(), trabalho.getCep())
console.log(casinha.getResidenceQuantity())

const casinhaDaLau = new ResidentialClient('Laura', 2, 16, '45678', 3, '5678')
console.log(casinhaDaLau)
console.log(casinhaDaLau.calculateBill())

// EXERCÍCIO 5

const aman = new CommercialClients('aman', 2, 13, '4567', 1, '5678')
console.log(aman.calculateBill())

// EXERCÍCIO 6)

const industriazinha = new IndustryClient('chacalaca', 23, 67, 73, 6, '5678')
console.log(industriazinha.calculateBill())