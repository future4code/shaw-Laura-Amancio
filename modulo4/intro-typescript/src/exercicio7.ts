const dnaEx: string = "ATT GCT GCG CAT TAA CGA CGC GTA"

function transcreveRNA (dna: string): string {
    const substituir: string = dna.replace(/A/g, "U").replace(/T/g, "A").replace(/C/g, "L").replace(/G/g, "C").replace(/L/, "G")

    return substituir
}

console.log(transcreveRNA(dnaEx))

// Da pra fazer tratando como array, usando o for of e ir substituindo percorrendo todo ele.