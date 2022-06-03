type Conta = {
    id: string,
    nome: string,
    cpf: number,
    nascimento: string,
    saldo?: number
    transacoes?: Transacao[]
}

type Transacao = {
    valor: number,
    descricao: string,
    data: string
}

export const users: Conta[] = [
    {
        id: "1",
        nome: "Laura",
        cpf: 345678901,
        nascimento: "10/07/1996",
        saldo: 200000000,
        transacoes: [
            {
                valor: -2000,
                descricao: "Tatuagem nova",
                data: "03/06/2022"
            },
            {
                valor: 43000,
                descricao: "salário",
                data: "05/05/2022"
            }
        ]     
    },
    {
        id: "2",
        nome: "Roberval",
        cpf: 345674301,
        nascimento: "25/01/2000",
        saldo: 765.90,
        transacoes: [
            {
                valor: -50,
                descricao: "Mercado",
                data: "20/05/2022"
            }
        ]
    },
    {
        id: "3",
        nome: "Chico",
        cpf: 666678901,
        nascimento: "02/10/1986",
        saldo: 65236.98,
        transacoes: [] 
    },
    {
        id: "4",
        nome: "Maria",
        cpf: 345678872,
        nascimento: "18/04/2002",
        saldo: 25.00,
        transacoes: [
            {
                valor: 15,
                descricao: "xerox da faculdade",
                data: "29/05/2022"
            }
        ]
    },
]