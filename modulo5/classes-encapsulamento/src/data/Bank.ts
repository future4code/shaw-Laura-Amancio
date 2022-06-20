import UserAccount from "./UserAccount";
import connection from "../connection";

export default class Bank {
    private accounts: UserAccount[]

    constructor (accounts: UserAccount[]) {
        this.accounts = accounts
    }

    public getAccounts(): UserAccount[] {
        return this.accounts
    }

    public async createAccount(user: UserAccount) {
        try {
            await connection('nome da tabela').insert(user)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async deleteAccount(id: number) {
        try {
            await connection('nome da tabela')
            .delete()
            .where({
                id: id
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}