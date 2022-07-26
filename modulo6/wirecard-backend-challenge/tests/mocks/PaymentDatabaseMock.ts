import PaymentModel from "../../src/models/PaymentModel";
import { paymentMock1, paymentMock2 } from "./PaymentMock";

export class PaymentDataMock {
    public async getPaymentById(id: string): Promise<PaymentModel | undefined> {
        switch (id) {
            case "id_mock":
                return paymentMock1
            case "id_mock2":
                return paymentMock2
            default:
                return undefined
        }
    }

    public async generatePayment(input: PaymentModel): Promise<void> {
       
    }
}