import { Client } from "./Client";
import { Residence } from "./Residence";

export class ResidentialClient extends Residence implements Client{

    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number, 
        cep: string, 
        ){
        super(residentsQuantity, cep)

        console.log('Construindo o residence client')
    }

    public getCpf(): string {
        return this.cpf
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
}