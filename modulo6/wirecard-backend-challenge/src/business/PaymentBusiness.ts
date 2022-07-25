import PaymentModel, { inputPaymentDTO, paymentStatus, paymentType } from "./../models/PaymentModel";
import PaymentDatabase from "../data/PaymentDatabase";
import { IdGenerator } from "../services/IdGenerator";
import ClientDatabase from "../data/ClientDatabase";
import BuyerDatabase from "../data/BuyerDatabase";
import { CustomError } from "../error/BaseCustomError";

export default class PaymentBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private paymentData = new PaymentDatabase(),
        private clientData = new ClientDatabase(),
        private buyerData = new BuyerDatabase()
    ){}

    public generatePayment = async(input: inputPaymentDTO) => {
        try {
            const {client_id, buyer_id, amount, type} = input
            let {status} = input

            const validClient = await this.clientData.getByID(client_id)
            if(!validClient){
                throw new CustomError(404, "This Client doesn't exist")
            }

            const validBuyer = await this.buyerData.getByID(buyer_id)
            if(!validBuyer){
                throw new CustomError(404, "This Buyer doesn't exist")
            }

            if(!client_id ||  !buyer_id || !amount || !type ){
                throw new CustomError(422, "fill in all fields")
            }

            if(!status){
                status = paymentStatus.A_PAGAR
            }

            if(type === paymentType.CARD){
                status = paymentStatus.PAGO
            }

            const id = this.idGenerator.generate()

            const newPayment = new PaymentModel(
                id,
                client_id,
                buyer_id,
                amount,
                type,
                status
            )
            

            await this.paymentData.generatePayment(newPayment)

            return newPayment
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getPaymentById = async(id: string, buyerId: string) => {
        try {
            const validBuyer = await this.buyerData.getByID(buyerId)
            if(!validBuyer){
            throw new CustomError(404, "Buyer not found")
            }

            const result = await this.paymentData.getPaymentById(id)
            return (result)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}