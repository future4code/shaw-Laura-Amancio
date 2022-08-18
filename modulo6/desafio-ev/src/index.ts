import { app } from "./app";
import CompeticaoController from "./controller/CompeticaoController";
import ResultadoController from "./controller/ResultadoController";

const competicaoController = new CompeticaoController()
const resultadoController = new ResultadoController()

app.post("/competicao", competicaoController.criarCompeticao)
app.post("/resultados/:competicao_id", resultadoController.addResultado)
app.put("/competicao/:id", competicaoController.mudarStatus)
app.get("/resultados/:id", resultadoController.getResultado100m)
app.get("/resultado/:id", resultadoController.getResultadoDardo)