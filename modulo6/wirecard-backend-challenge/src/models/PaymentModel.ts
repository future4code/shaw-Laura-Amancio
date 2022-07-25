export enum paymentType {
    CARD = "CARTÃO DE CRÉDITO",
    BOLETO = "BOLETO"
}
export enum paymentStatus {
    A_PAGAR = "A PAGAR",
    PAGO = "PAGO"
}

export default class PaymentModel {
    constructor(
        private id: string,
        private client_id: string,
        private buyer_id: string,
        private amount: number,
        private type: paymentType,
        private status: paymentStatus
    ){}

    public getId() {
        return this.id;
    }
    public getClientId() {
        return this.client_id;
    }
    public getBuyerId() {
        return this.buyer_id;
    }
    public getAmount() {
        return this.amount;
    }
    public getType() {
        return this.type;
    }
    public getStatus() {
        return this.status;
    }
    static todoBuyerModel(payment: any): PaymentModel {
        return new PaymentModel(payment.id, payment.client_id, payment.buyer_id, payment.amount, payment.type, payment.status)
    }
}


export interface inputPaymentDTO {
    client_id: string,
    buyer_id: string,
    amount: number,
    type: paymentType,
    status: paymentStatus,
}