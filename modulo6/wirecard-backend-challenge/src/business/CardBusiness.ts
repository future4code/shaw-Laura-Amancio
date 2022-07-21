import BuyerDatabase from "../data/BuyerDatabase";
import CardDatabase from "../data/CardDatabase";
import PaymentDatabase from "../data/PaymentDatabase";
import { validCards } from "../mocks/ValidCardsArrayMock";
import CardModel from "../models/CardModel";
import PaymentModel, { paymentType } from "../models/PaymentModel";
import { IdGenerator } from "../services/IdGenerator";

export default class CardBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private cardData = new CardDatabase(),
        private buyerData = new BuyerDatabase(),
        private paymentData = new PaymentDatabase()
    ){}

    public addCard = async(input: any, inputPay: any) => {
        const {buyer_id, card_holder,card_number, card_expiration_date, card_cvv} = input
        const {client_id, type, amount} = inputPay
        let {status} = inputPay

        if(!buyer_id || !card_holder || !card_number || !card_expiration_date || !card_cvv){
            throw new Error("fill in all the fields")
        }

        const validBuyer = await this.buyerData.getByID(buyer_id)
        if(!validBuyer){
            throw new Error("Buyer don't match the card owner")
        }
        if(!validCards.includes(card_cvv)){
            const id = this.idGenerator.generate()
            status = "A PAGAR"
            const newPayment = new PaymentModel(
                id,
                client_id,
                buyer_id,
                amount,
                type,
                status
            )
            await this.paymentData.generatePayment(newPayment)
            throw new Error("Payment not authorized")
        }else{

            const id = this.idGenerator.generate()
            
            const newCard = new CardModel(
            id,
            buyer_id,
            card_holder,
            card_number,
            card_expiration_date,
            card_cvv
            )

        await this.cardData.addCard(newCard)
        return ({message: "Payment authorized"})
        }
    }

    public getCardById = async(id: string) => {
        
    }
}