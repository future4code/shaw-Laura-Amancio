import axios from "axios"
import { Request, Response } from "express"
import { Address1 } from "../types"

export const getAddress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep

        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address: Address1 = {
           logradouro: result.data.logradouro,
           bairro: result.data.bairro,
           cidade: result.data.localidade,
           estado: result.data.uf,
           cep: result.data.cep,
        }

        res.status(200).send(address)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
}