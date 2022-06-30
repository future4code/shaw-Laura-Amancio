import { Request, Response } from "express";
import RecepieDatabse from "../data/RecepieDatabase";
import RecepieModel from "../models/RecepiesModel";
import { Authenticator } from "../services/Authenticator";
import { Generate } from "../services/Generate";

export default async function createRecepie(req: Request, res: Response) {
    try {
        const token = req.headers.authorization

        if(!token){
            throw new Error("Token não passado, favor veriricar login");
        }

        const data = new Authenticator()
        const authorized = data.getData(token)

        if(!authorized){
            throw new Error("Token inválido, verificar login");
        }

        const {title, description} = req.body
        const creator_id = req.params.id as string
        const criation_date = new Date()

        if(!title || !description){
            throw new Error("Preencha os campos de forma correta");
        }

        const recepieDB = new RecepieDatabse()
        const generate = new Generate()
        const id: string = generate.generateId()

        const newRecipe = new RecepieModel(id, title, description, criation_date, creator_id)
        await recepieDB.createRecepie(newRecipe)

        const date = newRecipe.getCreationDate()
        const dateString = date.getDate()  + "/" + (date.getMonth()+1) + "/" + date.getFullYear()

        res.status(201).send({newRecipe: {
            title: newRecipe.getTitle(),
            description: newRecipe.getDescription(),
            criation_date: dateString,
        }})
    } catch (error: any) {
        res.send(error.sqlmessage || error.message)
    }
}