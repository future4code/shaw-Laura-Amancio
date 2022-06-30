import RecepieModel from "../models/RecepiesModel";
import { BaseDatabase } from "./BaseDatabase";

export default class RecepieDatabse extends BaseDatabase {
    public async createRecepie(recipe: RecepieModel){
        try {
            await BaseDatabase.connection("CookRecepies")
            .insert(recipe)
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }

    public async getById(id: string) {
        try {
            const result = await BaseDatabase.connection("CookRecepies")
            .select('*')
            .where({id})

            return RecepieModel.todoRecipeModel(result[0])
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }

    public async getAllRecipes(): Promise<RecepieModel[]> {
        try {
            const result = await BaseDatabase.connection("CookRecepies")
            .select('*')
            return result.map((recipe => RecepieModel.todoRecipeModel(recipe)))
        } catch (error: any) {
            throw new Error(error.sql.message || error.message)
        }
    }
}