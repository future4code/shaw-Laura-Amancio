import { inputCompeticaoDTO } from "../models/CompeticaoModel";
import { Request, Response } from "express";
import { CompeticaoBusiness } from "../business/CompeticaoBusiness";

export default class CompeticaoController {
    constructor(
        private competicaoBusiness = new CompeticaoBusiness()
    ){}

    public criarCompeticao = async(req: Request, res: Response) => {
        try {
            const {name, status} = req.body
            const input: inputCompeticaoDTO = {
                name,
                status
            }
            await this.competicaoBusiness.criarCompeticao(input)
            res.status(201).send({message: "Competição criada com sucesso!"})
        } catch (error: any) {
            res.status(error.statusCode || 400).send({message: error.message})
        }
    }
}