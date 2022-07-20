import { Request, Response } from "express";
import BuyersBusiness from "../business/BuyersBusiness";
import { InputAddBuyerDTO } from "../models/BuyersModel";

export default class BuyerController {
    constructor(
        private buyerBusiness = new BuyersBusiness()
    ){}

    public addBuyer = async(req: Request, res: Response) => {
        try {
            const{name, email, cpf} = req.body

            const input: InputAddBuyerDTO = {
                name,
                email,
                cpf
            }

            await this.buyerBusiness.addBuyer(input)
            res.status(201).send({ message: "Usuário cadastrado com sucesso" })
        } catch (error: any) {
            res.status(400).send(error.sqlmessage || error.message); 
        }
    }
}