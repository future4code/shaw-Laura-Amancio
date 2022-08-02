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
            res.status(201).send({ message: "Buyer registered" })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message }) 
        }
    }
}