import { Client } from "./Client";
import { Industry } from "./Industry";

export class IndustryClient extends Industry implements Client{
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private registerNumber: number,
        machinesQuantity: number,
        cep: string
    ){
        super(machinesQuantity, cep)
    }

    public getRegisterNumber(){
        return this.registerNumber
    }

    public calculateBill(): number {
        return (this.consumedEnergy * 0.45) + (100 * this.machinesQuantity)
    }
}