import { BaseError } from "../error/BaseError";
import UserModel from "../models/UsersModel";
import { BaseDatabase } from "./BaseDatabase";

export default class UserDatabse extends BaseDatabase {
    protected TABLE_NAME = "users_signo"

    public async signUp(input: UserModel): Promise<void> {
        try {
            await this.getConnection()
            .insert(input)
            .into(this.TABLE_NAME)
        } catch (error: any) {
            throw new BaseError(500, error.message)
        }
    }

    public async findNickname(nickname: string): Promise<UserModel> {
        try {
            const result: UserModel[] = await this.getConnection()
            .select()
            .from(this.TABLE_NAME)
            .where({nickname})
            return result[0] && UserModel.todoUserModel(result[0])
        } catch (error: any) {
            throw new BaseError(500, error.message)
        }
    }

    public async findByID(id: string): Promise<UserModel> {
        try {
            const result: UserModel[] = await this.getConnection()
            .select()
            .from(this.TABLE_NAME)
            .where({id})
            return result[0] && UserModel.todoUserModel(result[0])
        } catch (error: any) {
            throw new BaseError(500, error.message)
        }
    }
}