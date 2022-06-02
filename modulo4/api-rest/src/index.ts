import express, { query } from "express";
import cors from "cors";
import { Request, Response } from "express";
import { users, User, UserType } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

// EXERCÍCIO 1/3:
// A1) O método usado é o GET (pegar)
// B1) A entidade que usarei é "users", uma vez que quero todos usuários.

// A3) Aqui usamos o query também, uma vez que estamos filtrando algo que já temos no usuário, sem precisar mudar rota

app.get("/users", (req: Request, res: Response) => {
  try {
    const name: string = req.query.name as string;
    const searchName = users.find((user) => {
      return user.name === name;
    });
    if (!searchName) {
      throw new Error("Usuário não encontrado");
    }
    res.send(searchName).status(200);
  } catch (error: any) {
    switch (error.message) {
      case "Nome não é um formato válido (tem que ser string)":
        res.status(422);
        break;
      case "Usuário não encontrado":
        res.status(404);
        break;
      default:
        res.status(500);
        error.message("Erro indeterminado do servidor");
    }
    res.send(error.message);
  }
});

// EXERCÍCIO 2:

app.get("/users/types", (req: Request, res: Response) => {
  try {
    const type: string = req.query.type as string;
    if (typeof type !== "string") {
      throw new Error("Tipo não é um formato válido (tem que ser string)");
    }
    const findTypes = users.filter((user) => {
      return user.type === type;
    });

    if (!findTypes.length) {
      throw new Error("Tipo não encontrado");
    }

    res.send(findTypes).status(200);
  } catch (error: any) {
    switch (error.message) {
      case "Tipo não é um formato válido (tem que ser string)":
        res.status(422);
        break;
      case "Tipo não encontrado":
        res.status(404);
        break;
      default:
        res.status(500);
        error.message("Erro indeterminado do servidor");
    }
    res.send(error.message);
  }
});

// A) Passei por query, uma vez que é como um filtro dentro das opções que temos
// B) Consigo fazendo um Enum de tipos :
// enum UserType {
//     ADMIN = "ADMIN",
//     NORMAL = "NORMAL"
// }

// EXERCÍCIO 4:

app.post("/users", (req: Request, res: Response) => {
  try {
    const { id, name, email, type, age } = req.body;
    if (typeof name !== "string" || typeof email !== "string" || type !== (UserType.ADMIN || UserType.NORMAL) || typeof age !== "number") {
      throw new Error("Campos de preenchimento em formato inválido");
    }
    if(!name || !email || !type || !age){
        throw new Error("Algum campo sem preenchimento, favor verificar")
    }
    const updateUsers =  [...users, req.body];
    
    res.send(updateUsers).status(200);
  } catch (error:any) {
      switch(error.message){
          case "Campos de preenchimento em formato inválido":
              res.status(422)
              break
          case "Algum campo sem preenchimento, favor verificar":
              res.status(422)
              break
          default:
              res.status(500)
              error.message("Erro inesperado no servidor")
      }
      res.send(error.message)
  }
});

// A) O que mais muda são as verificações, uma vez que o PUT normalmente é usado para alterar alguma coisa que já está no conjunto de itens. 
// Passando esse POST para PUT a lógica seria a mesma, porém a diferença é que precisaria fazer um filter para selecionar qual dos usuários iria 
// mudar, faria isso buscando o id. Uma vez feito o filtro, retorno o user sendo  user = req.body.
// Posso usar o PUT para apenas adicionar também, mas é uma péssima prática.
// B) Não, o PUT é mais usado para fazer alterações nos recursos, mesmo podendo criar novos quando estes não existem, é uma péssima prática, uma vez que temos o POST
// que é específico para criação de novos recursos.
app.listen(3003, () => {
  console.log("Está rodando");
});
