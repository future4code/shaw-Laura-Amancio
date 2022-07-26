export enum competicaoName {
    RASOS1 = "100m Classificatória1",
    RASO2 = "100m Classificatória2",
    RASOQUARTA = "100m quartas final",
    RASOSEMI = "100m semifinal",
    RASOFINAL = "100m final",
    DARDO1 = "Dardo classificatória1",
    DARDO2 = "Dardo classificatória2",
    DARDOQUARTA = "Dardo quartas final",
    DARDOSEMI = "Dardo semifinal",
    DARDOFINAL =  "Dardo final"
}

export enum competicaoStatus {
    FINALIZADA = "FINALIZADA",
    ACONTECENDO = "ACONTECENDO AGORA",
    AGUARDANDO = "AGUARDANDO"
}

export class CompeticaoModel {
    constructor(
        private id: string,
        private name: competicaoName,
        private status: competicaoStatus
    ){}

    public getId(){
        return this.id
    }
    public getName(){
        return this.name
    }
    public getStatus(){
        return this.status
    }

    static todoCompeticao(competicao: any): CompeticaoModel {
        return new CompeticaoModel(competicao.id, competicao.name, competicao.status)
    }
}

export interface inputCompeticaoDTO {
    name: competicaoName,
    status?: competicaoStatus
}