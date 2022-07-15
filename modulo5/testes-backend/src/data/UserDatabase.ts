import { UserModel } from "../model/UserModel";
import { BaseDatabase } from "./BaseDatabase";


export default class UserDatabase extends  BaseDatabase{
    protected TABLE_NAME = "CookUsers"

    public async getUserByID(id: string): Promise<UserModel> {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
            .select("*")
            .where({id})
            return result[0]
        } catch (error) {
            throw new Error(error.sqlmessage || error.message)
        }
    }
}