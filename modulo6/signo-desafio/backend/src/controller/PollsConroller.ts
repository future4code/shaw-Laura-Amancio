import { InputEditPollDTO } from "./../models/PollsModel";
import { Request, Response } from "express";
import PollsBusiness from "../business/PollsBusiness";
import { InputPollDTO } from "../models/PollsModel";

export default class PollsController {
  constructor(private pollsBusiness = new PollsBusiness()) {}

  public getAllPolls = async(req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string

      const result = await this.pollsBusiness.getAllPolls(token)

      res.status(200).send(result)
    } catch (error: any) {
      res.status(error.code || 500).send({ message: error.message })
    }
  }

  public createPoll = async (req: Request, res: Response) => {
    try {
      const { title, start_date, end_date } = req.body
      const token = req.headers.authorization as string

      const input: InputPollDTO = {
        title,
        start_date,
        end_date,
      }

      await this.pollsBusiness.createPoll(input, token);
      res.status(200).send({ message: `Poll ${title} created!` });
    }catch (error: any) {
      res.status(error.code || 500).send({ message: error.message })
    }
  }

  public editPoll = async(req: Request, res: Response) => {
    try {
      const {title, start_date, end_date} = req.body
      const id = req.params.poll_id
      const token = req.headers.authorization as string

      const input: InputEditPollDTO = {
        title,
        start_date,
        end_date
      }

      await this.pollsBusiness.editPoll(input,token, id)
      res.status(200).send({message: "Poll updated successfully"})
    } catch (error: any) {
      res.status(error.code || 500).send({ message: error.message })
    }
  }

  public deletePoll = async(req: Request, res: Response) => {
    try {
      const id = req.params.poll_id
      const token = req.headers.authorization as string

      await this.pollsBusiness.deletePoll(id, token)
      res.status(200).send({message: "Poll deleted with success"})
    } catch (error: any) {
      res.status(error.code || 500).send({ message: error.message })
    }
  }

  public gelPollByID = async(req: Request, res: Response) => {
    try {
      const id = req.params.poll_id
      const token = req.headers.authorization as string

      const result = await this.pollsBusiness.getPollById(id, token)
      res.status(200).send(result)
    } catch (error: any) {
      res.status(error.code || 500).send({ message: error.message })
    }
  }
}
