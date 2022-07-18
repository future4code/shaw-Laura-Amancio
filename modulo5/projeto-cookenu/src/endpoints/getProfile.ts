import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function getProfile(req: Request, res: Response): Promise<void>{
    try {
        const token = req.headers.authorization as string
        if(!token){
            throw new Error("Token de autorizaçãonão enviado");
        }

        const authenticator = new Authenticator()
        const data = authenticator.getData(token)

        if(!data.id){
            throw new Error("Token inválido, favor verificar o login");
        }

        const userDB = new UserDatabase()
        const user = await userDB.getById(data.id)

        res.send({
            user: {
                email: user.getEmail(),
                id: user.getId()
            }
        })
    } catch (error: any) {
        res.send(error.message)
    }
}