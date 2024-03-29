import { Request, Response } from "express";
import { ResultadoBusiness } from "../business/ResultadoBusiness";

export default class ResultadoController {
    constructor(
        private resultadoBusiness = new ResultadoBusiness
    ){}

    public addResultado = async(req: Request, res: Response) => {
        try {
            const competicao_id = req.params.competicao_id
            const{atleta, value, unidade} = req.body

            const input = {
                competicao_id,
                atleta,
                value,
                unidade
            }
            await this.resultadoBusiness.addResultado(input)
            res.status(201).send({message: "Resultado registrado com sucesso"})
        } catch (error: any) {
            res.status(error.statusCode || 400).send({message: error.message})
        }
    }

    public getResultado100m = async(req: Request, res : Response) => {
        try {
            const id = req.params.id
            const resultado = await this.resultadoBusiness.getResultado100m(id)
            res.status(200).send(resultado)
        } catch (error: any) {
            res.status(error.statusCode || 400).send({message: error.message})
        }
    }
    
    public getResultadoDardo = async(req: Request, res : Response) => {
        try {
            const id = req.params.id
            const resultado = await this.resultadoBusiness.getResultadoDardo(id)
            res.status(200).send(resultado)
        } catch (error: any) {
            res.status(error.statusCode || 400).send({message: error.message})
        }
    }
}