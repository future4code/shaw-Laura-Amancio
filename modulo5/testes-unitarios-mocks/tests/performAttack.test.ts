import { performAttackDependecie } from "../src/performAttack";
import { InterfacePersonagens } from "./../types/interfacePersonagens";

describe("testando as batalhas", () => {
    test("Deve retornar Edward com 1300 de vida", () => {
            const attacker: InterfacePersonagens = {
                nome: "Damon Salvatore",
                vida: 1500,
                força: 500,
                defesa: 400
            }
            const defender: InterfacePersonagens = {
                nome: "Edward Cullen",
                vida: 1500,
                força: 500,
                defesa: 300
            }

            const validatorMock = jest.fn(() => {
                return true
            })
            performAttackDependecie(attacker, defender, validatorMock)
            expect(defender.vida).toBe(1300)
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(2)
            expect(validatorMock).toHaveReturnedTimes(2)
            expect.assertions(4)
    })

    test("Deve retornar 'Invalid Character'", () =>{
        try {
            const attacker: InterfacePersonagens = {
                nome: "",
                vida: 1500,
                força: 500,
                defesa: 400
            }
            const defender: InterfacePersonagens = {
                nome: "Edward Cullen",
                vida: 1500,
                força: 500,
                defesa: 300
            }
    
            const validatorMock = jest.fn(() => {
                return false
            })
            performAttackDependecie(attacker, defender, validatorMock)
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(1)
            expect(validatorMock).toReturn()
            expect(validatorMock).toReturnTimes(1)
        } catch (error: any) {
            expect(error.message).toEqual("Invalid Character")
        }finally{
            expect.assertions(1)
        }
    })
})