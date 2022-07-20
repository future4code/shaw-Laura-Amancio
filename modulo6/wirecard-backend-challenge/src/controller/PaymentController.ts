import { paymentType } from "./../models/PaymentModel";
import { Request, Response } from "express";
import PaymentBusiness from "../business/PaymentBusiness";
import { inputGeneratePaymentDTO } from "../models/PaymentModel";
import CardBusiness from "../business/CardBusiness";

export default class PaymentController {
    constructor(
        private paymentBusiness = new PaymentBusiness(),
        private cardBusiness = new CardBusiness()
    ){}

    public generatePayment = async(req: Request, res: Response) => {
        try {
            const client_id = req.params.client_id
            const buyer_id = req.params.buyer_id
            const {amount, type, status, card_holder, card_number, card_expiration_date, card_cvv} = req.body
            
            if(type === paymentType.CARD){
                const inputCard: inputGeneratePaymentDTO = {
                    buyer_id,
                    card_holder,
                    card_number,
                    card_expiration_date,
                    card_cvv
                }
                const inputPayment = {
                    client_id,
                    buyer_id,
                    type,
                    amount,
                    status,
                }
                const result = await this.cardBusiness.addCard(inputCard)
                await this.paymentBusiness.generatePayment(inputPayment)

                res.send(result)
            }else{
                const inputBoleto: inputGeneratePaymentDTO = {
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
            res.send(error.message)
        }
    }
}