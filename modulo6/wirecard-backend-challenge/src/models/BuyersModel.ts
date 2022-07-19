export class BuyersModel {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private cpf: string
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
    static toBuyerModel(buyer: any): BuyersModel {
        return new BuyersModel(buyer.id, buyer.name, buyer.email, buyer.cpf);
    }
}