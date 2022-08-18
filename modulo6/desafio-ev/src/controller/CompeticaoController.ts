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

    public mudarStatus = async(req: Request, res: Response) => {
        try {
            const {status} = req.body
            const id = req.params.id
            await this.competicaoBusiness.mudarStatus(id, status)
            res.status(200).send({message: `Status da competição alterado para ${status}`})
        } catch (error: any) {
            res.status(error.statusCode || 400).send({message: error.message})
        }
    } 
}