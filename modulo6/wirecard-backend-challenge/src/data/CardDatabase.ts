import CardModel from "../models/CardModel";
import { BaseDatabase } from "./BaseDatabase";

export default class CardDatabase extends BaseDatabase{
    protected TABLE_NAME = "card_wirecard"

    public async addCard(input: any) {
        try {
            await this.getConnection()
            .insert(input)
            .into(this.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }

    public async getCardId(id: string): Promise<CardModel> {
        try {
            const result: CardModel[] = await this.getConnection()
            .select()
            .from(this.TABLE_NAME)
            .where({id})
            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }
}