import { Commerce } from "./Commerce";
import { Client } from "./Client";


export class CommercialClients extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string,
    ) {
        super(floorsQuantity, cep)
    }

    public getCnpj() {
        return this.cnpj
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
}