import BuyerDatabase from "../data/BuyerDatabase";
import CardDatabase from "../data/CardDatabase";
import PaymentDatabase from "../data/PaymentDatabase";
import { CustomError } from "../error/BaseCustomError";
import { validCards } from "../mocks/ValidCardsArrayMock";
import CardModel, { inputCardDTO } from "../models/CardModel";
import PaymentModel, { inputPaymentDTO, paymentStatus } from "../models/PaymentModel";
import { IdGenerator } from "../services/IdGenerator";

export default class CardBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private cardData = new CardDatabase(),
        private buyerData = new BuyerDatabase(),
        private paymentData = new PaymentDatabase()
    ){}

    public addCard = async(input: inputCardDTO, inputPay: inputPaymentDTO) => {
        const {buyer_id, card_holder,card_number, card_expiration_date, card_cvv} = input
        const {client_id, type, amount} = inputPay
        let {status} = inputPay
        const [month, year] = card_expiration_date.split("/")
        const card_expirationFormat = new Date(`${year}-${month}-01`)

        if(!buyer_id || !card_holder || !card_number || !card_expiration_date || !card_cvv){
            throw new CustomError(422, "Fill in all the fields")
        }

        if(!card_expiration_date.includes("/") || card_expiration_date.length !== 7){
            throw new CustomError(400, "Invalid card expiration date format")
        }

        if(card_cvv.toString().length !== 3){
            throw new CustomError(400, "Invalid CVV format")
        }

        if(card_number.toString().length !== 16){
            throw new CustomError(400, "Not valid card number format")
        }

        const validBuyer = await this.buyerData.getByID(buyer_id)
        if(!validBuyer){
            throw new CustomError(404, "Buyer don't match the card owner")
        }
        
        if(card_expirationFormat.getTime() < Date.now()){
            const id = this.idGenerator.generate()
            status = paymentStatus.A_PAGAR
            const newPayment = new PaymentModel(
                id,
                client_id,
                buyer_id,
                amount,
                type,
                status
            )
            await this.paymentData.generatePayment(newPayment)
            throw new CustomError(400, "Expired card")
        }
        
        if(!validCards.includes(card_cvv)){
            const id = this.idGenerator.generate()
            status = paymentStatus.A_PAGAR
            const newPayment = new PaymentModel(
                id,
                client_id,
                buyer_id,
                amount,
                type,
                status
            )
            await this.paymentData.generatePayment(newPayment)
            throw new CustomError(401, "Payment not authorized")
        }else{

            const id = this.idGenerator.generate()
            
            const newCard = new CardModel(
            id,
            buyer_id,
            card_holder,
            card_number,
            card_expirationFormat,
            card_cvv
            )

        await this.cardData.addCard(newCard)
        return ({message: "Payment authorized"})
        }
    }
}