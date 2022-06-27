import { UserModel } from "./../model/UserModel";
import { Generate } from "./../services/Generate";
import { Request, Response } from 'express'
import UserDatabase from '../data/UserDatabase';
import { Authenticator } from "../services/Authenticator";

export default async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const {email, password} = req.body
        
        if(!email || !password){
            res.statusCode = 422
            throw new Error("Preencha os campos corretamente");
        }
        if(!email.includes("@")){
            throw new Error("Preencha o email com endereço válido");
        }
        if(password.length < 6){
            throw new Error("Preencha uma senha com mais de 6 caracteres");
        }

        const userDB = new UserDatabase()
        const generate = new Generate()
        const id: string = generate.generateId()

        const newUser = new UserModel(id, email, password)

        await userDB.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id})

        res.status(201).send({
            token,
        })
    } catch (error: any) {
        res.send(error.sqlMessage ||  error.message)
    }
}