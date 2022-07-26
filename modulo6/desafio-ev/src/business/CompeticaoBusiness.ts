import CompeticaoDatabase from "../data/CompeticaoDatabase";
import { CompeticaoModel, competicaoName, competicaoStatus, inputCompeticaoDTO } from "../models/CompeticaoModel";
import { IdGenerator } from "../services/IdGenerator";

export class CompeticaoBusiness {
  constructor(
    private idGenerator = new IdGenerator(),
    private competicaoData = new CompeticaoDatabase()
  ) {}

  public async criarCompeticao(input: inputCompeticaoDTO) {
    try {
        const { name } = input;
    let { status } = input;

    if (!name) {
      throw new Error("Preencha o campo");
    }
    if (
      name !== competicaoName.DARDO1 &&
      name !== competicaoName.DARDO2 &&
      name !== competicaoName.DARDOFINAL &&
      name !== competicaoName.DARDOQUARTA &&
      name !== competicaoName.DARDOSEMI &&
      name !== competicaoName.RASO2 &&
      name !== competicaoName.RASOS1 &&
      name !== competicaoName.RASOQUARTA &&
      name !== competicaoName.RASOSEMI &&
      name !== competicaoName.RASOFINAL
    ) {
      throw new Error("Competição não existe ou não é permitida");
    }

    if(!status){
        status = competicaoStatus.AGUARDANDO
    }

    const id = this.idGenerator.generate()

    const novaCompeticao = new CompeticaoModel(
        id,
        name,
        status
    )

    await this.competicaoData.criarCompeticao(novaCompeticao)
  
    } catch (error: any) {
        throw new Error(error.message)
    }
  }
}
