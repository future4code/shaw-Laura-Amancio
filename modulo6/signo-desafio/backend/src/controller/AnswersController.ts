import { Request, Response } from "express";
import AnswersBusiness from "../business/AnswersBusiness";

export class AnswersController {
    constructor(
        private answerBusiness = new AnswersBusiness
    ){}

    public registerAnswer = async(req: Request, res: Response) => {
        try {
            const {answer} = req.body
            const poll_id = req.params.poll_id
            const token = req.headers.authorization as string
            
            await this.answerBusiness.registerAnswer(answer, poll_id, token)
            res.status(201).send({message: "vote registered"})
        } catch (error: any) {
            res.status(error.code || 500).send({ message: error.message })
        }
    }
    
    public getVotes = async(req:Request, res: Response) => {
        try {
            const poll_id = req.params.poll_id
            const token = req.headers.authorization as string

            const result = await this.answerBusiness.getVotes(poll_id, token)
            res.status(200).send(result)
        } catch (error: any) {
            res.status(error.code || 500).send({ message: error.message })
        }
    }
}