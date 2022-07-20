import PaymentModel from "../models/PaymentModel";
import { BaseDatabase } from "./BaseDatabase";

export default class PaymentDatabase extends BaseDatabase {
    protected TABLE_NAME = "payment_wirecard"

    public async generatePayment(input: PaymentModel): Promise<void> {
        try {
            await this.getConnection()
            .insert(input)
            .into(this.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }
}