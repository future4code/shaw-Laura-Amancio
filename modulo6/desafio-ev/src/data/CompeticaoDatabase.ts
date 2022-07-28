import { competicaoStatus } from "./../models/CompeticaoModel";
import { CompeticaoModel, competicaoName } from "../models/CompeticaoModel"
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

    public async acharPorNome(name: competicaoName): Promise<CompeticaoModel |undefined> {
        try {
            const result: CompeticaoModel[] = await this.getConnection()
            .select()
            .from(this.TABLE_NAME)
            .where({name})
            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }

    public async acharPorId(id: string): Promise<CompeticaoModel>{
        try {
            const result: CompeticaoModel[] = await this.getConnection()
            .select()
            .from(this.TABLE_NAME)
            .where({id})
            return result[0] && CompeticaoModel.todoCompeticao(result[0])
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }

    public async mudarStatus(id: string, status: competicaoStatus): Promise<void> {
        try {
            await this.getConnection()
            .update({status})
            .from(this.TABLE_NAME)
            .where({id})
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }
}