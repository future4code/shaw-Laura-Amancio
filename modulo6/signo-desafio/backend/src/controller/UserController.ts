import { InputUserDTO } from "./../models/UsersModel";
import { Request, Response } from "express";
import UsersBusiness from "../business/UsersBusiness";

export default class UserController {
    constructor(
        private userBusiness = new UsersBusiness
    ){}

    public signUp = async(req: Request, res: Response) => {
        try {
            const {nickname, password} = req.body

            const input: InputUserDTO = {
                nickname,
                password
            }
            const token = await this.userBusiness.signUp(input)
            res.status(201).send({token})
        } catch (error: any) {
            res.status(error.code || 500).send({ message: error.message })
        }
    }

    public login = async(req: Request, res: Response) => {
        try {
            const {nickname, password} = req.body

            const input: InputUserDTO = {
                nickname,
                password
            }
            const token = await this.userBusiness.login(input)
            res.status(200).send({token})
        } catch (error: any) {
            res.status(error.code || 500).send({ message: error.message })
        }
    }
}