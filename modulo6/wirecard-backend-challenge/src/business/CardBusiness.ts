import BuyerDatabase from "../data/BuyerDatabase";
import CardDatabase from "../data/CardDatabase";
import { validCards } from "../mocks/ValuidCardsArrayMock";
import CardModel from "../models/CardModel";
import { paymentType } from "../models/PaymentModel";
import { IdGenerator } from "../services/IdGenerator";

export default class CardBusiness {
    constructor(
        private idGenerator = new IdGenerator(),
        private cardData = new CardDatabase(),
        private buyerData = new BuyerDatabase()
    ){}

    public addCard = async(input: any) => {
        const {buyer_id, card_holder,card_number, card_expiration_date, card_cvv} = input

        if(!buyer_id || !card_holder || !card_number || !card_expiration_date || !card_cvv){
            throw new Error("fill in all the fields")
        }

        const validBuyer = await this.buyerData.getByID(buyer_id)
        if(!validBuyer){
            throw new Error("Buyer don't match the card owner")
        }
        if(!validCards.includes(card_cvv)){
            throw new Error("Payment not authorized")
        }else{
            
            const newCard = new CardModel(
            buyer_id,
            card_cvv,
            card_number,
            card_expiration_date,
            card_cvv
            )

        await this.cardData.addCard(newCard)
        return ({message: "Payment authorized"})
        }
    }
}