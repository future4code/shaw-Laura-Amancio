import PaymentModel, { paymentType } from "./../models/PaymentModel";
import PaymentDatabase from "../data/PaymentDatabase";
import { IdGenerator } from "../services/IdGenerator";
import ClientDatabase from "../data/ClientDatabase";
import BuyerDatabase from "../data/BuyerDatabase";

export default class PaymentBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private paymentData = new PaymentDatabase(),
        private clientData = new ClientDatabase(),
        private buyerData = new BuyerDatabase()
    ){}

    public generatePayment = async(input:any) => {
        try {
            const {client_id, buyer_id, amount, type} = input
            let {status} = input

            const validClient = await this.clientData.getByID(client_id)
            if(!validClient){
                throw new Error("This Client doesn't exist")
            }

            const validBuyer = await this.buyerData.getByID(buyer_id)
            if(!validBuyer){
                throw new Error("This Buyer doesn't exist")
            }

            if(!client_id ||  !buyer_id || !amount || !type ){
                throw new Error("fill in all fields")
            }

            if(!status){
                status = "A PAGAR"
            }

            if(type === paymentType.CARD){
                status = "PAGO"
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
            throw new Error(error.message)
        }
    }

    public getPaymentById = async(id: string, buyerId: string) => {
        try {
            const validBuyer = await this.buyerData.getByID(buyerId)
            if(!validBuyer){
            throw new Error("Buyer not found")
            }

            const result = await this.paymentData.getPaymentById(id)
            return (result)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}