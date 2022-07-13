import { CustomError } from "./../errors/CustomError";
import UserDatabase from "../data/UserDatabase";
import { IdGenerator } from "./../services/idGenerator";


export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase
    ){}

    public async betUserByID(id: string) {
        try {
            if(!id){
                throw new CustomError(422, "Missing input");
            }
            const user = await this.userDatabase.getUserByID(id)
            if(!user){
                throw new CustomError(404, "User not found")
            }
            return user
        } catch (error) {
            return error.message
        }
    }
}