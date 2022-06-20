import { Request, Response } from "express"
import { insertAddressDataBase } from "../data/insertAddressDataBase"
import { getFullAddress } from "../services/getFullAddress"

export const insertAddress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep
        const complemento = req.query.complemento as string
        const numero = Number(req.query.numero)

        const address = await getFullAddress(cep, numero, complemento)

        if(!address){
            throw new Error("CEP inválido")
        }

        await insertAddressDataBase(address)

        res.status(201).send("Endereço cadastrado com sucesso")
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}