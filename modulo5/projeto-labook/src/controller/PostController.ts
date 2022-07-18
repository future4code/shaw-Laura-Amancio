import { IdGenerator } from "./../services/IdGenerate";
import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { inputCreatePostDTO } from "../types/inputCreatePostDTO";

export default class PostController{
    constructor(
        private postBusiness: PostBusiness
    ){}

    createPost = async(req:Request, res: Response) => {
        const {picture, description, type} = req.body
        const creator_id = req.params.creator_id
        const token = req.headers.authorization as string
        const criation_date = new Date()

        const input: inputCreatePostDTO = {
            picture,
            description,
            criation_date,
            type,
            creator_id
        }
        try {
            await this.postBusiness.createPost(input, token)
            res.status(201).send("Post criado com sucesso")
        } catch (error: any) {
            res.send(error.sqlmessage || error.message)
        }
    }

    getByID = async(req:Request, res: Response) => {
        const id = req.params.id 
        const token = req.headers.authorization as string

        try {
            const result = await this.postBusiness.getByID(id, token)
            res.status(200).send(result)
        } catch (error: any) {
            res.send(error.sqlmessage || error.message)
        }
    }
}