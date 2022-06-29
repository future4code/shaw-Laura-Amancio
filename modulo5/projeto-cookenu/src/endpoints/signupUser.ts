import { Authenticator } from "../services/Authenticator";
import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import { UserModel } from "../models/UserModel";
import { Generate } from "../services/Generate";
import { HashManage } from "../services/HashManage";

export default async function createUser (req: Request, res: Response) {
    try {
        const {email, name, password} = req.body

        if(!email || !name || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos corretamente")
        }

        if(password.length < 6) {
            throw new Error("A senha precisa ter no mínimo 6 caracteres")
        }

        const userDB = new UserDatabase()
        const user = await userDB.getByEmail(email)

        if(user) {
            throw new Error("Email já cadastrado")
        }

        const generate = new Generate()
        const id: string = generate.generateId()

        const hashManage = new HashManage()
        const hashPassword = await hashManage.hashPassword(password)

        const newUser = new UserModel(id, email, name, hashPassword)


        await userDB.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id})

        res.status(201).send({
            token
        })
    } catch (error: any) {
        res.send(error.sqlmessage || error.message)
    }
}