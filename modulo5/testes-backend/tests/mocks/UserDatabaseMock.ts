import { UserModel } from "../../src/model/UserModel";
import { userMock} from "./userMocks";

export class UserDatabaseMock {
    public async getUserByID(id: string): Promise<UserModel> {
        return userMock
    }
}