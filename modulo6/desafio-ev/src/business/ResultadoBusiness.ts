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
        competicao.getName() === competicaoName.DARDO1 ||
        competicao.getName() === competicaoName.DARDO2 ||
        competicao.getName() === competicaoName.DARDOFINAL ||
        competicao.getName() === competicaoName.DARDOQUARTA ||
        competicao.getName() === competicaoName.DARDOSEMI
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
        (competicao.getName() === competicaoName.DARDO1 ||
          competicao.getName() === competicaoName.DARDO2 ||
          competicao.getName() === competicaoName.DARDOFINAL ||
          competicao.getName() === competicaoName.DARDOQUARTA ||
          competicao.getName() === competicaoName.DARDOSEMI) &&
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
      );

      await this.resultadoDatabase.addResultado(novoResultado);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getResultado100m(id: string) {
    try {
      if (!id) {
        throw new Error("Id da competição não informado");
      }

      const resultado = await this.resultadoDatabase.pegarResultado100m(id);
      if (resultado.length === 0) {
        throw new Error("Competição não encontrada");
      }
      if (resultado[0].getUnidade() != resultadoUnidade.S) {
        throw new Error("Competição não compatível com a requisição");
      }

      return resultado;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getResultadoDardo(id: string) {
    try {
      const resultado = await this.resultadoDatabase.pegarResultadoDardo(id);
      if (resultado[0].getUnidade() != resultadoUnidade.M) {
        throw new Error("Competição não compatível com a requisição");
      }
      const newResultado: ResultadosModel[] = [];
      for (let result of resultado) {
        resultado.filter((competicao) => {
          if (
            result.getValue() >= competicao.getValue() &&
            result.getAtleta() === competicao.getAtleta()
          ) {
            if (
              !newResultado.find(
                (atleta) => atleta.getAtleta() === competicao.getAtleta()
              )
            ) {
              newResultado.push(result);
            }
          }
        });
      }
      return newResultado;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
