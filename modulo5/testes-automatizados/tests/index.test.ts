import performPurchase from "../src"
import { User } from "../src/models/UserModel"

describe("Teste exercício 1", () => {

    test("Veifica saldo maior que valor", () => {

       const user: User = {
        nome: "laura",
        saldo: 200
       }

       const result = performPurchase(user, 100)

       expect(result).toEqual({
        nome: "laura",
        saldo: 100
       })
    })

    test("Verifica saldo igual ao valor", () => {
        const user: User = {
            nome: "brenda",
            saldo: 200
        }

        const result = performPurchase(user, 200)

        expect(result).toEqual({
            nome: "brenda",
            saldo: 0
        })
    })

    test("Verifica saldo menor ao valor", () => {
        const user: User = {
            nome: "roberval",
            saldo: 200
        }

        const result = performPurchase(user, 300)

        expect(result).toEqual(undefined)
    })
})