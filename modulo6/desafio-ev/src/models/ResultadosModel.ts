export enum resultadoUnidade {
    S = "s",
    M = "m"
}

export class ResultadosModel {
    constructor(
        private competicao_id: string,
        private atleta: string,
        private value: number,
        private unidade: resultadoUnidade
    ){}

    public getCompeticaoId() {
        return this.competicao_id
    }
    public getAtleta() {
        return this.atleta
    }
    public getValue() {
        return this.value
    }
    public getUnidade() {
        return this.unidade
    }

    static todoResultadoModel(resultado: any): ResultadosModel {
        return new ResultadosModel(resultado.competicao_id, resultado.atleta, resultado.value, resultado.unidade)
    }
}

export interface inputResultadoDTO{
    competicao_id: string,
    atleta: string,
    value: number,
    unidade?: resultadoUnidade
}