import { inputCardDTO } from "./../src/models/CardModel";
import { inputPaymentDTO, paymentStatus, paymentType } from "./../src/models/PaymentModel";
import { BuyerDatabaseMock } from "./mocks/BuyerDataMock";
import { PaymentDataMock } from "./mocks/PaymentDatabaseMock";
import PaymentBusiness from "../src/business/PaymentBusiness";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { ClientDataMock } from "./mocks/ClientDataMock";
import CardBusiness from "../src/business/CardBusiness";
import { CardDatabaseMock } from "./mocks/CardDatabaseMock";


const paymentBusinessMock = new PaymentBusiness(
    new IdGeneratorMock,
    new PaymentDataMock as any,
    new ClientDataMock as any,
    new BuyerDatabaseMock as any
)

const cardBusinessMock = new CardBusiness(
    new IdGeneratorMock,
    new CardDatabaseMock as any,
    new BuyerDatabaseMock as any,
    new PaymentDataMock as any
)


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
                buyer_id: "buyer_id",
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
                buyer_id: "id_mock1",
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

describe("Card table tests", () => {
    test("Test addCard, buyer doens't exist", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCardDTO = {
                buyer_id: "id_mock",
                card_holder: "holder name",
                card_number: 1234567897418523,
                card_expiration_date: "02/2028",
                card_cvv: 123
            }
            const clientPay: inputPaymentDTO = {
                client_id: "id_mock",
                buyer_id: "id_mock",
                amount: 150,
                type: paymentType.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Buyer don't match the card owner")
        }
    })
    test("Test addCard, missing field", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCardDTO = {
                buyer_id: "id_mock1",
                card_holder: "",
                card_number: 1234567897418523,
                card_expiration_date: "02/2028",
                card_cvv: 123
            }
            const clientPay: inputPaymentDTO = {
                client_id: "id_mock",
                buyer_id: "id_mock1",
                amount: 150,
                type: paymentType.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Fill in all the fields")
        }
    })
    test("Test addCard, invalid card expiration date", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCardDTO = {
                buyer_id: "id_mock1",
                card_holder: "holder name",
                card_number: 1234567897418523,
                card_expiration_date: "02/28",
                card_cvv: 123
            }
            const clientPay: inputPaymentDTO = {
                client_id: "id_mock",
                buyer_id: "id_mock1",
                amount: 150,
                type: paymentType.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Invalid card expiration date format")
        }
    })
    test("Test addCard, invalid cvv format", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCardDTO = {
                buyer_id: "id_mock1",
                card_holder: "holder name",
                card_number: 1234567897418523,
                card_expiration_date: "02/2028",
                card_cvv: 1234
            }
            const clientPay: inputPaymentDTO = {
                client_id: "id_mock",
                buyer_id: "id_mock1",
                amount: 150,
                type: paymentType.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Invalid CVV format")
        }
    })
    test("Test addCard, invalid card format", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCardDTO = {
                buyer_id: "id_mock1",
                card_holder: "holder name",
                card_number: 123,
                card_expiration_date: "02/2028",
                card_cvv: 123
            }
            const clientPay: inputPaymentDTO = {
                client_id: "id_mock",
                buyer_id: "id_mock1",
                amount: 150,
                type: paymentType.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Not valid card number format")
        }
    })
    test("Test addCard, expired card", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCardDTO = {
                buyer_id: "id_mock1",
                card_holder: "holder name",
                card_number: 1234567891234567,
                card_expiration_date: "02/2020",
                card_cvv: 123
            }
            const clientPay: inputPaymentDTO = {
                client_id: "id_mock",
                buyer_id: "id_mock1",
                amount: 150,
                type: paymentType.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Expired card")
        }
    })
    test("Test addCard, not authorized", async() => {
        expect.assertions(1)
        try {
            const clientCard: inputCardDTO = {
                buyer_id: "id_mock1",
                card_holder: "holder name",
                card_number: 1234567891234567,
                card_expiration_date: "02/2028",
                card_cvv: 122
            }
            const clientPay: inputPaymentDTO = {
                client_id: "id_mock",
                buyer_id: "id_mock1",
                amount: 150,
                type: paymentType.CARD,
                status: paymentStatus.A_PAGAR,
                boleto_number: 0
            }
            await cardBusinessMock.addCard(clientCard, clientPay)
        } catch (error: any) {
            expect(error.message).toBe("Payment not authorized")
        }
    })
})