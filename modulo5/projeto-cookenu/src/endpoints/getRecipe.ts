import { Request, Response } from "express";
import RecepieDatabse from "../data/RecepieDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function getRecipeByID(req: Request, res: Response): Promise<void> {
    try {
       const token = req.headers.authorization
       
       if(!token){
        throw new Error("Token não informado, favor verificar login")
       }
       const authenticator = new Authenticator()
       const data = authenticator.getData(token)

       if(!data.id){
        throw new Error("Token inválido, favor verificar login")
       }
       
       const recipeId = req.params.id

       const recipeDB = new RecepieDatabse()
       const recipe = await recipeDB.getById(recipeId)

       const date = recipe.getCreationDate()
       const dateString = date.getDate()  + "/" + (date.getMonth()+1) + "/" + date.getFullYear()
       
       res.status(200).send({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        creation_date:dateString,
       })

    } catch (error: any) {
        res.send(error.message)
    }
}