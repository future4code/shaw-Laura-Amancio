import { UserBusiness } from "../src/business/UserBusiness";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

const userBusinessMock = new UserBusiness(
    new UserDatabaseMock() as any
)

describe("Teste de pegar usuário pelo ID", () => {
    test("código de erro usuário não existe", async() =>{
        try {
            await userBusinessMock.betUserByID('teste')
        } catch (error) {
            expect(error.message).toBe("User not found")
            expect(error.statusCode).toBe(404)
            expect.assertions(2)
        }
    })

    test("Sucesso", async() => {
        const getUserByID = jest.fn((id: string) => userBusinessMock.betUserByID(id))
        const result = await getUserByID("id_mocado")
        expect(result).toEqual({
            id: "id_mocado",
            email: "mock@gmail.com",
            name: "mock",
            password: "senhaMocada",
            role: "NORMAL"
        })
        expect(getUserByID).toHaveBeenCalledWith("id_mocado")
    })
})