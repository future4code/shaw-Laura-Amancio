import RecepieModel from "../models/RecepiesModel";
import { BaseDatabase } from "./BaseDatabase";

export default class RecepieDatabse extends BaseDatabase {
  public async createRecepie(recipe: RecepieModel): Promise<void> {
    try {
      await BaseDatabase.connection("CookRecepies").insert(recipe);
    } catch (error: any) {
      throw new Error("Erro inesperado");
    }
  }

  public async getById(id: string): Promise<RecepieModel> {
    try {
      const result = await BaseDatabase.connection("CookRecepies")
        .select("*")
        .where({ id });

      return RecepieModel.todoRecipeModel(result[0]);
    } catch (error: any) {
      throw new Error("Erro inesperado");
    }
  }

  public async getAllRecipes(): Promise<RecepieModel[]> {
    try {
      const result = await BaseDatabase.connection("CookRecepies").select("*");
      return result.map((recipe) => RecepieModel.todoRecipeModel(recipe));
    } catch (error: any) {
      throw new Error("Erro inesperado");
    }
  }

  public async deleteRecipe(id: string): Promise<void> {
    try {
      await BaseDatabase.connection("CookRecepies").delete().where({ id });
    } catch (error: any) {
      throw new Error(error.sqlmessage || error.message);
    }
  }

  public async getByAuthorId(id: string) {
    try {
      const result = await BaseDatabase.connection("CookRecepies")
        .select("*")
        .where({creator_id: id })

        console.log(result)

      return result.map((recipe) => RecepieModel.todoRecipeModel(recipe))
    } catch (error: any) {
      throw new Error(error.sqlmessage || error.message);
    }
  }
}
