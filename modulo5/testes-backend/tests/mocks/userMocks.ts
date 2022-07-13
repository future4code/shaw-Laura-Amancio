import { UserRole } from "./../../src/types/UserTypes";
import { UserModel } from "../../src/model/UserModel";


export const userMock = new UserModel(
    "id_mocado",
    "mock@gmail.com",
    "mock",
    "senhaMocada",
    UserRole.NORMAL
)
export const userMock2 = new UserModel(
    "id_mocado2",
    "mock2@gmail.com",
    "mock2",
    "senhaMocada2",
    UserRole.ADMIN
)