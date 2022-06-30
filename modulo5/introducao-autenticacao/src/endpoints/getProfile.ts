import { UserRole } from "./../model/UserModel";
import { Request, Response } from "express"
import UserDatabase from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"

export default async function getProfile(req: Request, res: Response){
    try {
        const token = req.headers.auth as string
        if(!token){
            throw new Error("Token não enviado")
        }

        const authenticator = new Authenticator()
        const data = authenticator.getData(token)

        const userDB = new UserDatabase()
        const user = await userDB.getById(data.id)

        if(data.role != UserRole.NORMAL){
            throw new Error("Usuário não autorizado");
        }
        res.send({
            user: {
                email: user.getEmail(),
                id: user.getId()
            }
        })
    } catch (error: any) {
        res.send({ message: error.message })
    }
}