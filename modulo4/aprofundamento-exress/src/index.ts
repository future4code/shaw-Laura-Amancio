import express from "express";
import cors from "cors";
import { listaAfazeres } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

// Ex1 teste de express:

app.get("/ping", (req, res) => {
  res.send("pong");
});

// // Ex4:

app.get("/afazeres/:status", (req, res) => {
  const statusTarefa = req.params.status;

  const porFazer = listaAfazeres.filter((afazer) => {
    if (String(afazer.completed) === statusTarefa) {
      return afazer;
    }
  });

  res.send(porFazer);
});

// // Ex5:

app.post("/criar", (req, res) => {
  const { userId, id, title, completed } = req.body;

  listaAfazeres.push({ userId, id, title, completed });

  res.send(listaAfazeres);
});

// Ex6:

app.put("/muda-status/:id", (req, res) => {
  const idTarefa = Number(req.params.id);

  const mudaStatus = listaAfazeres.filter((afazer) =>{
      if(afazer.id === idTarefa){
          afazer.completed = !afazer.completed
          return afazer
      }
  })

  res.send(mudaStatus)
});

// Ex7:

app.delete("/afazeres/:id", (req, res) => {
  const idTarefa = Number(req.params.id);

  const tarefasAtualizadas = listaAfazeres.filter((afazer) => {
    if (idTarefa !== afazer.id) {
      return afazer;
    }
  });

  res.send(tarefasAtualizadas);
});

// Ex8:

app.get("/afazer/:userId", (req, res) => {
  const userId = Number(req.params.userId);

  const acharTarefas = listaAfazeres.filter((afazer) => {
    if (userId === afazer.userId) {
      return afazer;
    }
  });

  if (!acharTarefas.length) {
    res.status(400).send("Não encontrado");
  }
  res.send(acharTarefas);
});

app.listen(3003, () => {
  console.log("Ta rodando no 3003");
});
