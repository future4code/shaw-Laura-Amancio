import { UserModel } from "../model/UserModel";
import { BaseDatabase } from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase {
    public async createUser(user: UserModel) {
        try {
            await BaseDatabase.connection("Users")
            .insert(user)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getByEmail(email: string): Promise<UserModel> {
        try {
            const result = await BaseDatabase.connection("Users")
            .select('*')
            .where({email})

            console.log(result[0])
            return UserModel.todoUserModel(result[0])
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }


}