export default class CardModel {
    constructor(
        private id: string,
        private buyer_id: string,
        private card_holder: string,
        private card_number: number,
        private card_expiration_date: string,
        private card_cvv: number
    ){}
}