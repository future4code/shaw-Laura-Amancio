import { BuyersModel } from "../models/BuyersModel";
import { BaseDatabase } from "./BaseDatabase";

export default class BuyerDatabase extends BaseDatabase{
    protected TABLE_NAME = "buyers_wirecard"

    public async addBuyer(input: BuyersModel): Promise<void> {
        try {
            await this.getConnection()
            .insert(input)
            .into(this.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }

    public async getByID(id: string): Promise<BuyersModel> {
        try {
            const result: BuyersModel[] = await this.getConnection()
            .select("*")
            .from(this.TABLE_NAME)
            .where({id})

            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }
}