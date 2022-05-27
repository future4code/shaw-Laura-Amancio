import { nodeModuleNameResolver } from "typescript"

type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientesBanco: Cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function emprestimo (cliente: Cliente[]) {
    const somaDebitos = cliente.map((debito) =>{
        return debito.debitos
    })
    // .reduce((total, debito) => total + debito, 0)

    console.log(somaDebitos)
}

emprestimo(clientesBanco)