export class BuyersModel {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private cpf: number
    ){}

    public getId() {
        return this.id;
    }
    public getName() {
        return this.name;
    }
    public getEmail() {
        return this.email;
    }
    public getCpf() {
        return this.cpf;
    }
    public static todoBuyerModel(buyer: any): BuyersModel {
        return new BuyersModel(buyer.id, buyer.name, buyer.email, buyer.cpf);
    }
}

export interface InputAddBuyerDTO{
    name: string,
    email: string,
    cpf: number
}