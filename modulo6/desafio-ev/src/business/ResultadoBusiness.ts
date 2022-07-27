import { ResultadosModel } from "./../models/ResultadosModel";
import CompeticaoDatabase from "../data/CompeticaoDatabase";
import ResultadoDatabase from "../data/ResultadoDatabase";
import { competicaoName, competicaoStatus } from "../models/CompeticaoModel";
import { inputResultadoDTO, resultadoUnidade } from "../models/ResultadosModel";

export class ResultadoBusiness {
  constructor(
    private resultadoDatabase = new ResultadoDatabase(),
    private competicaoData = new CompeticaoDatabase()
  ) {}

  public async addResultado(input: inputResultadoDTO) {
    try {
      const { competicao_id, atleta, value } = input;
      let { unidade } = input;

      if (!competicao_id || !atleta || !value) {
        throw new Error("Preencha todos os campos corretamente");
      }
      const competicao = await this.competicaoData.acharPorId(competicao_id);
      if (!competicao) {
        throw new Error("Competição não encontrada");
      }
      if (
        competicao.getName() ===
        (competicaoName.DARDO1 ||
          competicaoName.DARDO2 ||
          competicaoName.DARDOFINAL ||
          competicaoName.DARDOQUARTA ||
          competicaoName.DARDOSEMI)
      ) {
        unidade = resultadoUnidade.M;
      } else {
        unidade = resultadoUnidade.S;
      }

      if (competicao.getStatus() !== competicaoStatus.ACONTECENDO) {
        throw new Error("Competição ainda não começou ou já foi finalizada");
      }
      const acharAtleta = await this.resultadoDatabase.acharAtleta(atleta);
      if (
        competicao.getName() ===
          (competicaoName.DARDO1 ||
            competicaoName.DARDO2 ||
            competicaoName.DARDOFINAL ||
            competicaoName.DARDOQUARTA ||
            competicaoName.DARDOSEMI) &&
        acharAtleta.length === 3
      ) {
        throw new Error("Atleta já registrado 3x");
      }
      if (
        competicao.getName() !==
          (competicaoName.DARDO1 ||
            competicaoName.DARDO2 ||
            competicaoName.DARDOFINAL ||
            competicaoName.DARDOQUARTA ||
            competicaoName.DARDOSEMI) &&
        acharAtleta.length === 1
      ) {
        throw new Error("Resultado de atleta já registrado");
      }

      const novoResultado = new ResultadosModel(
        competicao_id,
        atleta,
        value,
        unidade
      )

      await this.resultadoDatabase.addResultado(novoResultado)
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
