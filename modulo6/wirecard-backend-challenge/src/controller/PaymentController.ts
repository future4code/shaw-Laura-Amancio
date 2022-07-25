import { inputCardDTO } from "./../models/CardModel";
import { inputPaymentDTO, paymentType } from "./../models/PaymentModel";
import { Request, Response } from "express";
import PaymentBusiness from "../business/PaymentBusiness";
import CardBusiness from "../business/CardBusiness";
import BuyersBusiness from "../business/BuyersBusiness";

export default class PaymentController {
    constructor(
        private paymentBusiness = new PaymentBusiness(),
        private cardBusiness = new CardBusiness(),
        private buyerBusiness = new BuyersBusiness()
    ){}

    public generatePayment = async(req: Request, res: Response) => {
        try {
            const client_id = req.params.client_id
            const buyer_id = req.params.buyer_id
            const {amount, type, status, card_holder, card_number, card_expiration_date, card_cvv} = req.body
            
            if(type === paymentType.CARD){
                const inputCard: inputCardDTO = {
                    buyer_id,
                    card_holder,
                    card_number,
                    card_expiration_date,
                    card_cvv
                }
                const inputPayment: inputPaymentDTO = {
                    client_id,
                    buyer_id,
                    type,
                    amount,
                    status,
                }
                const result = await this.cardBusiness.addCard(inputCard, inputPayment)
                await this.paymentBusiness.generatePayment(inputPayment)

                res.send(result)
            }else{
                const inputBoleto: inputPaymentDTO = {
                    client_id,
                    buyer_id,
                    type,
                    amount,
                    status
                }
                await this.paymentBusiness.generatePayment(inputBoleto)
                const boletoNumber = Date.now()
                res.status(201).send({message: `Boleto number: ${boletoNumber}`})
            }

        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message })
        }
    }

    public getPaymentById = async(req: Request, res: Response) => {
        try {
            const id = req.params.payment_id
            const paymentResult = await this.paymentBusiness.getPaymentById(id)
            res.status(200).send({
                paymentData: paymentResult
            })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message })
        }
    }
}