import { paymentType,  paymentStatus } from "../../src/models/PaymentModel";
import PaymentModel from "../../src/models/PaymentModel";

export const paymentMock1 = new PaymentModel(
    "id_mock",
    "client_mock",
    "buyer_mock",
    345,
    paymentType.BOLETO,
    paymentStatus.A_PAGAR,
    789456123
)
export const paymentMock2 = new PaymentModel(
    "id_mock2",
    "client_mock2",
    "buyer_mock2",
    123,
    paymentType.CARD,
    paymentStatus.PAGO
)
