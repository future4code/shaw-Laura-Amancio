import { NumericLiteral, TypeOfTag } from "typescript"

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function typeFilmes (nomeFilme: string, ano: number, genero: string, nota?: number): object{
    return {
        nome: nomeFilme,
        anoLancamento: ano,
        genero: genero,
        pontuacao: nota? nota : "não avaliado ainda"
    }
}

console.log(typeFilmes("oi", 1996, GENERO.TERROR))