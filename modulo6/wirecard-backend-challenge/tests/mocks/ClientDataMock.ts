import { clientMock2, clientMock1 } from "./ClientMock";
import { ClientModel } from "../../src/models/ClientModel";

export class ClientDataMock {
    public async getByID(id: string): Promise<ClientModel | undefined >{
        switch (id) {
            case "id_mock":
                return clientMock1
            case "id_mock2":
                return clientMock2
            default:
                return undefined
        }
    }
}