import UserDatabase from "../data/UserDatabase"
import { CustomError } from "../errors/CustomError"

export class UserController {
    constructor(
        private userDatabase: UserDatabase
    ){}

    public getUserByID = async(id: string) => {
        const result = await this.userDatabase.getUserByID(id)

        if(!result) {
            throw new CustomError(404, "Usuário não encontrado")
        }
        return ({
            id: result.getId(),
            name: result.getName(),
            email: result.getEmail(),
            role: result.getRole()
        })
    }
}