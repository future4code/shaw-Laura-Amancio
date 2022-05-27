function nomeData (nome: string, data: string): string {
    const dataSeparada: string[] = data.split("/")
    return `Olá, me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês ${dataSeparada[1]} do ano de ${dataSeparada[2]}`
}

console.log(nomeData("Laura", "10/07/1996" ))