export default function findNumber(array: number[]): number {
    const somaReal: number = 5050
    let somaArray: number = 0
    for(let i = 0; i < array.length; i++) {
        somaArray += array[i]
    }
    return somaReal - somaArray
}