import { Request, Response } from "express"
import RecepieDatabse from "../data/RecepieDatabase"
import { Authenticator } from "../services/Authenticator"

export default async function getAllUsers(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization

        if(!token){
            throw new Error("Token não encontrado, verificar login")
        }

        const authorization = new Authenticator()
        const data = authorization.getData(token)

        if(!data.id){
            throw new Error("Token inválido, verificar login")
        }

        const recipeDB = new RecepieDatabse()
        const recipes = await recipeDB.getAllRecipes()

        res.send(recipes)
    } catch (error: any) {
        res.send(error.message)
    }
}