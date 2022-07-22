import { Request, Response } from "express";
import ClientBusiness from "../business/ClientBusiness";

export default class ClientConroller {
    constructor(
        private clientBusiness = new ClientBusiness()
    ){}

    public addClient = async(req: Request, res: Response) => {
        try {
            await this.clientBusiness.addClient()

            res.status(201).send({message: "Client created with success"})
        } catch (error: any) {
            res.status(400).send(error.sqlmessage || error.message)
        }
    }
}