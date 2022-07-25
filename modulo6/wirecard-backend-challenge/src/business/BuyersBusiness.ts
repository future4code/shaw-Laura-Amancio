import BuyerDatabase from "../data/BuyerDatabase";
import { CustomError } from "../error/BaseCustomError";
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
                throw new CustomError(422, "Fill in all the fields")
            }

            if(!email.includes("@")){
                throw new CustomError(400, "Invalid email format")
            }

            if(cpf.toString().length !== 11){
                throw new CustomError(400, "Invalid format of CPF")
            }

            const registeredEmail = await this.buyerData.getByEmail(email)
            const registeredCpf = await this.buyerData.getByCpf(cpf)

            if(registeredCpf || registeredEmail){
                throw new CustomError(409, "Email or CPF already registered")
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
            throw new CustomError(400, error.message)
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
            throw new CustomError(400, error.message)
        }
    }
}