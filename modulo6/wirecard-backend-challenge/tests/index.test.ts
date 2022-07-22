import { BuyerDatabaseMock } from "./mocks/BuyerDataMock";
import { paymentMock2, paymentMock1 } from "./mocks/PaymentMock";
import { PaymentDataMock } from "./mocks/PaymentDatabaseMock";
import PaymentBusiness from "../src/business/PaymentBusiness";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { ClientDataMock } from "./mocks/ClientDataMock";


const paymentBusinessMock = new PaymentBusiness(
    new IdGeneratorMock,
    new PaymentDataMock as any,
    new ClientDataMock as any,
    new BuyerDatabaseMock as any
)

describe("Payment table tests", () => {
    test("Test getById, not found payment", async () => {
        expect.assertions(1)
        try {
            await paymentBusinessMock.getPaymentById("test", "buyer_id")
        } catch (error: any) {
            expect(error.message).toBe("Buyer not found")
        }
    })
})