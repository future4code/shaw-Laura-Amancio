import validateCharacter from "../src/validateCharacter"

describe("Unitary validateCharacter test", () => {
    test("deve retornar false se nome estiver vazio", () => {
        const propriedadeVazia = 
        {
            nome: "",
            vida: 1500,
            força: 200,
            defesa: 250
        }
        const result = validateCharacter(propriedadeVazia)
        expect(result).toBe(false)
    })
    test("deve retornar false se vida for zero", () => {
        const vidaZero = 
        {
            nome: "Edward Cullen",
            vida: 0,
            força: 200,
            defesa: 250
        }
        const result = validateCharacter(vidaZero)
        expect(result).toBe(false)
    })
    test("deve retornar false se força for zero", () => {
        const forçaZero = 
        {
            nome: "Damon Salvatore",
            vida: 1500,
            força: 0,
            defesa: 200
        }
        const result = validateCharacter(forçaZero)
        expect(result).toBe(false)
    })
    test("deve retornar false se defesa for zero", () => {
        const defesaZero = 
        {
            nome: "Katherine Pierce",
            vida: 1500,
            força: 350,
            defesa: 0
        }
        const result = validateCharacter(defesaZero)
        expect(result).toBe(false)
    })
    test("deve retornar false se vida, força ou defesa forem negativos", () => {
        const propriedadeNegativa = 
        {
            nome: "Olavo de Carvalho",
            vida: -1500,
            força: 200,
            defesa: 200
        }
        const result = validateCharacter(propriedadeNegativa)
        expect(result).toBe(false)
    })
    test("deve retornar true, valores válidos", () => {
        const parametrosValidos = 
        {
            nome: "Caroline Forbes",
            vida: 1500,
            força: 300,
            defesa: 300
        }
        const result = validateCharacter(parametrosValidos)
        expect(result).toBe(true)
    })
})