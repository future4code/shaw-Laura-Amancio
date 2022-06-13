function obterEstatisticas(numeros: number[]): object {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// a) a entrada é um array e a saída é um objeto;

// b) numerosOrdenados: number[];
//    soma: number;
//    estatisticas: object;

// c)
type amostra = {
    numeros: number[],
    obterEstatisticas: () =>{estatisticas(numeros: number[]): object}
}