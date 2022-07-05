import { BaseDatabase } from "./BaseDatabase";
import { UserModel } from "../models/UserModel";

export default class UserData extends BaseDatabase{
    protected TABLE_NAME = "LaBook_users"

    public async createUser(user: UserModel) {
        try {
            await BaseDatabase.connection(this.TABLE_NAME)
            .insert(user)
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }

    public async findEmail(email: string) {
        try {
           const result = await BaseDatabase.connection(this.TABLE_NAME)
           .select()
           .where({email})

           return result[0]
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }
}