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
      
      const registrado = await this.competicaoData.acharPorNome(name)
      if(registrado){
        throw new Error("Competição já registrada")
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

  public async mudarStatus(id: string, input: competicaoStatus) {
    try {

      const competicao = await this.competicaoData.acharPorId(id)
      if(!competicao){
        throw new Error("Competição não encontrada")
      }
      if(input !== competicaoStatus.ACONTECENDO && input !== competicaoStatus.AGUARDANDO &&  input !== competicaoStatus.FINALIZADA) {
        throw new Error("Formato de status inválido")
      }

      await this.competicaoData.mudarStatus(id, input)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
