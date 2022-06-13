import express from "express";
import cors from "cors";
import { listaProdutos } from "./data";
import { randomUUID } from "crypto";

const app = express();

app.use(express.json());
app.use(cors());

// GET TESTE

app.get("/teste", (req, res) => {
  res.send("A API está funcionando :)");
});

app.listen(3003, () => {
  console.log("Ta rodando");
});

// EXERCÍCIO 3 POST

app.post("/adicionar", (req, res) => {
  try {
    const { id, name, price } = req.body;
    req.body.id = randomUUID();

    if (price <= 0) {
      throw new Error("Preço inválido");
    }
    if (!name || !price) {
      throw new Error("Algum campo do produto está vazio");
    }
    if (price !== Number(price) || name !== String(name)) {
      throw new Error("Nome ou preço em formato inválido");
    }

    const novaLista = [...listaProdutos, req.body];

    res.send(novaLista).status(200);
  } catch (error: any) {
    switch (error.message) {
      case "Algum campo do produto está vazio":
        res.status(422);
        break;
      case "Nome ou preço em formato inválido":
        res.status(422);
        break;
      case "Preço inválido":
        res.status(422);
        break;
      default:
        res.status(500);
        error.message("Erro inesperado do servidor");
        break;
    }
    res.send(error.message);
  }
});

// EXERCÍCIO 4 - GET All Products

app.get("/produtos", (req, res) => {
  res.send(listaProdutos).status(200);
});

// EXERCÍCIO 5

app.put("/alterarPreco/:id", (req, res) => {
  try {
    const idProduto = req.params.id;
    const { price } = req.body;

    const [findProduct] = listaProdutos.filter((produto) => {
      return produto.id === idProduto;
    });
    if (!findProduct) {
      throw new Error("produto não encontrado");
    }
    if (price <= 0) {
      throw new Error("Preço está com valor negativo ou igual a zero");
    }
    if (!price || price !== Number(price)) {
      throw new Error("Preço está com formato incorreto");
    }
    const listaAtualizada = listaProdutos.filter((produto) => {
      if (produto.id === idProduto) {
        return (produto.price = price);
      } else {
        return produto;
      }
    });

    res.send(listaAtualizada);
  } catch (error: any) {
    switch (error.message) {
      case "produto não encontrado":
        res.status(404);
        break;
      case "Preço está com formato incorreto":
        res.status(422);
        break;
      case "Preço está com valor negativo ou igual a zero":
        res.status(422);
        break;
      default:
        res.status(500);
        error.message("Erro inesperado de servidor");
        break;
    }

    res.send(error.message);
  }
});

// EXERCÍCIO 6

app.delete("/produtos/:id", (req, res) => {
  try {
    const idProduto = req.params.id;
    const [findProduct] = listaProdutos.filter((produto) => {
      return produto.id === idProduto;
    });
    if (!findProduct) {
      throw new Error("produto não encontrado");
    }
    const arrayDeletado = listaProdutos.filter((produto) => {
      if (idProduto !== produto.id) {
        return produto;
      }
    });
    res.send(arrayDeletado).status(200);
  } catch (error: any) {
    switch (error.message) {
      case "produto não encontrado":
        res.status(404);
        break;
      default:
        res.status(500);
        error.message("Erro inesperado de servidor");
        break;
    }
    res.send(error.message);
  }
});
