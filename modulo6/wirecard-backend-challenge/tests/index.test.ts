// import { inputCardDTO } from "./../src/models/CardModel";
import { inputPaymentDTO, paymentStatus, paymentType } from "./../src/models/PaymentModel";
import { BuyerDatabaseMock } from "./mocks/BuyerDataMock";
import { PaymentDataMock } from "./mocks/PaymentDatabaseMock";
import PaymentBusiness from "../src/business/PaymentBusiness";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { ClientDataMock } from "./mocks/ClientDataMock";
// import CardBusiness from "../src/business/CardBusiness"
// import CardDatabaseMock from "./mocks/CardDatabaseMock"


const paymentBusinessMock = new PaymentBusiness(
    new IdGeneratorMock,
    new PaymentDataMock as any,
    new ClientDataMock as any,
    new BuyerDatabaseMock as any
)
// const cardBusinessMock = new CardBusiness(
//     new IdGeneratorMock,
//     new CardDatabaseMock,
//     new BuyerDatabaseMock,
//     new PaymentDataMock
// )

describe("Payment table tests", () => {
    test("Test getById, not found payment", async () => {
        expect.assertions(1)
        try {
            await paymentBusinessMock.getPaymentById("test")
        } catch (error: any) {
            expect(error.message).toBe("Payment not found")
        }
    })
    test("Test generatePayment, client not found", async() => {
        expect.assertions(1)
        try {
            const client: inputPaymentDTO = {
                client_id: "",
                buyer_id: "buyer_mock",
                amount: 345,
                type: paymentType.BOLETO,
                status: paymentStatus.A_PAGAR,
                boleto_number: 789456123
            }
            await paymentBusinessMock.generatePayment(client)
        } catch (error: any) {
            expect(error.message).toBe("This Client doesn't exist")
        }
    })
    test("Test generatePayment, buyer not found", async() => {
        expect.assertions(1)
        try {
            const client: inputPaymentDTO = {
                client_id: "id_mock",
                buyer_id: "",
                amount: 345,
                type: paymentType.BOLETO,
                status: paymentStatus.A_PAGAR,
                boleto_number: 789456123
            }
            await paymentBusinessMock.generatePayment(client)
        } catch (error: any) {
            expect(error.message).toBe("This Buyer doesn't exist")
        }
    })
    test("Test generatePayment, invalid field", async() => {
        expect.assertions(1)
        try {
            const client: inputPaymentDTO  = {
                client_id: "id_mock",
                buyer_id: "buyer_mock",
                amount: 0,
                type: paymentType.BOLETO,
                status: paymentStatus.A_PAGAR,
                boleto_number: 789456123
            }
            await paymentBusinessMock.generatePayment(client)
        } catch (error: any) {
            expect(error.message).toBe("Fill in all fields")
        }
    })
})

// describe("Card table tests", () => {
//     test("Test addCard, missing field", async() => {
//         try {
//             const client: inputCardDTO = {
//                 buyer_id: "buyer_id",
//                 card_holder: "holder name",
//                 card_number: 0,
//                 card_expiration_date: "02/2028",
//                 card_cvv: 123
//             }
//             await 
//         } catch (error: any) {
            
//         }
//     })
// })