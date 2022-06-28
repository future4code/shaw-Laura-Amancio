import Transaction from "./Transaction";

export default class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    
    public getUser() {
        return {
            cpf: this.cpf,
            name: this.name,
            age: this.age,
            balance: this.balance,
            transactions: this.transactions
        }
    }

    public setTransaction(transaction: Transaction[]){
        this.transactions = transaction
    }
  }