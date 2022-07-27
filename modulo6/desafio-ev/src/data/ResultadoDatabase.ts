import { ResultadosModel } from "../models/ResultadosModel";
import { BaseDatabase } from "./BaseDatabase";

export default class ResultadoDatabase extends BaseDatabase{
    protected TABLE_NAME = "resultados"

    public async addResultado(input: ResultadosModel): Promise<void> {
        try {
            await this.getConnection()
            .insert(input)
            .into(this.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }

    public async acharAtleta(atleta: string):  Promise<ResultadosModel[]> {
        try {
            const resultado: ResultadosModel[] = await this.getConnection()
            .select()
            .where({atleta})
            return resultado
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }
}