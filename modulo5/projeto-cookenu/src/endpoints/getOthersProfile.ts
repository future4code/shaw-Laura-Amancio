import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function getOthersProfile(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization

        if(!token){
            throw new Error("Token não informado, verificar login")
        }

        const authorization = new Authenticator()
        const data = authorization.getData(token)

        if(!data.id){
            throw new Error("Token inválido, verificar login")
        }

        const id = req.params.id 

        const userDB = new UserDatabase()
        const user = await userDB.getById(id)

        res.status(200).send({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail()
        })

    } catch (error: any) {
        res.send(error.message)
    }
}