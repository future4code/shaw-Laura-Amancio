enum Setores {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Pessoa = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}

const funcionarios: Pessoa[] = [
	{ nome: "Marcos", salário: 2500, setor: Setores.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: Setores.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: Setores.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: Setores.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: Setores.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: Setores.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: Setores.MARKETING, presencial: true }
]

function ehDeMarketing (pessoa: Pessoa[]): Pessoa[] {
    const pessoaFiltrada: Pessoa[] = pessoa.filter((funcionario) => {
        return (funcionario.setor === "marketing" && funcionario.presencial === true)
    })

    return pessoaFiltrada
}

console.table(ehDeMarketing(funcionarios))