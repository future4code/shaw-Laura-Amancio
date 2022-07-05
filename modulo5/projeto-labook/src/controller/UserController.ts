import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { inputSignupUserDTO } from "../types/inputSignupUserDTO";

export default class UserController {
    constructor(
        private userBusiness: UserBusiness
    ){}

    signup = async(req: Request, res: Response) => {
        const {name, email, password} = req.body

        const input: inputSignupUserDTO = {
            name,
            email,
            password
        }

        try {
            const token = await this.userBusiness.signup(input)
            res.status(201).send({token})
        } catch (error: any) {
            res.send(error.sqlmessage || error.message)
        }
    }
}