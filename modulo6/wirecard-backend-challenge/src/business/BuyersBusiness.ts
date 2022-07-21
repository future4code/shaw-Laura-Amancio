import BuyerDatabase from "../data/BuyerDatabase";
import { BuyersModel, InputAddBuyerDTO } from "../models/BuyersModel";
import { IdGenerator } from "./../services/IdGenerator";
export default class BuyersBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private buyerData = new BuyerDatabase()
    ){}

    public addBuyer = async(input: InputAddBuyerDTO) => {
        try {
            const {name, email, cpf} = input

            if(!name || !email || !cpf){
                throw new Error("Preencha todos os campos corretamente")
            }

            const id: string = this.idGenerator.generate()

            const newBuyer = new BuyersModel(
                id,
                name,
                email,
                cpf
            )

            await this.buyerData.addBuyer(newBuyer)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public getById = async(id:string) => {
        try {
            const result = await this.buyerData.getByID(id)
            if(!result) {
                throw new Error("Buyer not found")
            }

            return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}