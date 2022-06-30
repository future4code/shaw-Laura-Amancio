import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManage } from "../services/HashManage";

export default async function login(req: Request, res:Response){
    try {
        const {email, password} = req.body

        if(!email || !email.includes("@")){
            throw new Error("Email ou senha inválidos")
        }

        const userDB = new UserDatabase()
        const user = await userDB.getByEmail(email)

        if(!user){
            throw new Error("Email ou senha inválidos");
        }

        const hashManage = new HashManage()
        const passIsCorrect: boolean = await hashManage.compare(password, user.getPassword())

        if(!passIsCorrect){
            throw new Error("Email ou senha inválidos")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id: user.getId(), role: user.getRole()})

        res.send({token})
    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}