
import { BuyersModel } from "../../src/models/BuyersModel"
import { Buyer1, Buyer2 } from "./BuyerMock"

export class BuyerDatabaseMock {
    public async insert(buyer: BuyersModel): Promise<void> { }

    public async getByEmail(email: string): Promise<BuyersModel | undefined> {
        switch (email) {
            case "email1@gmail.com":
                return Buyer1
            case "email2@gmail.com":
                return Buyer2
            default:
                return undefined
        }
    }
    public async getByCpf(cpf: number): Promise<BuyersModel | undefined> {
        switch (cpf) {
            case 74185245963:
                return Buyer1
            case 85134978901:
                return Buyer2
            default:
                return undefined
        }
    }
    public async getByID(id: string): Promise<BuyersModel | undefined> {
        switch (id) {
            case "id_mock1":
                return Buyer1
            case "id_mock2":
                return Buyer2
            default:
                return undefined
        }
    }
}