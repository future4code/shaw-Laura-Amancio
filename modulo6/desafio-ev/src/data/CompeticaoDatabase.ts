import { CompeticaoModel } from "../models/CompeticaoModel"
import { BaseDatabase } from "./BaseDatabase"

export default class CompeticaoDatabase extends BaseDatabase {
    protected TABLE_NAME = "competicao"

    public async criarCompeticao(input: CompeticaoModel): Promise<void>{
        try {
            await this.getConnection()
            .insert(input)
            .into(this.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }
}