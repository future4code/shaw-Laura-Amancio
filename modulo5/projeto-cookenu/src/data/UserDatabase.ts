import { UserModel } from "../models/UserModel";
import { BaseDatabase } from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase {
    public async createUser(user: UserModel) {
        try {
            await BaseDatabase.connection("CookUsers")
            .insert(user)
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }

    public async getByEmail(email: string) {
        try {
            const result = await BaseDatabase.connection("CookUsers")
            .select('*')
            .where({email})

            return result[0] ? UserModel.todoUserModel(result[0]) : null
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message);
        }
    }

    public async getById(id: string) {
        try {
            const result = await BaseDatabase.connection("CookUsers")
            .select('*')
            .where({id})

            return UserModel.todoUserModel(result[0])
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }
}