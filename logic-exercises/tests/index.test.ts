import findNumber from "../src/ex1-numero-faltante"
import {arrayMock} from "./mocks/ex1"

describe("teste ex 1", () => {
    test("teste findNumber, sucesso numero 8", () => {
        const result = findNumber(arrayMock)
        expect(result).toBe(8)
    })
})