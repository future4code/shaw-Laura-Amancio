import CardModel from "../../src/models/CardModel";

const mockDate = new Date("2028-11-01T00:00:00.000Z")

export const cardMock = new CardModel(
    "id_mock1",
    "buyer_id1",
    "name1",
    7412589632587412,
    mockDate,
    123
)

export const cardMock2 = new CardModel(
    "id_mock2",
    "buyer_id2",
    "name2",
    7418529632589632,
    mockDate,
    321
)