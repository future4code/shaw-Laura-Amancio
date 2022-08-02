import CardModel from "../../src/models/CardModel";
import { cardMock, cardMock2 } from "./CardMock";

export class CardDatabaseMock {
    public async addCard(input: CardModel): Promise<void> {
        
    }

    public async getCardId(id: string): Promise<CardModel | undefined> {
        switch (id) {
            case "id_mock1":
                return cardMock
            case "id_mock2":
                return cardMock2
            default:
                return undefined
        }
    }
}