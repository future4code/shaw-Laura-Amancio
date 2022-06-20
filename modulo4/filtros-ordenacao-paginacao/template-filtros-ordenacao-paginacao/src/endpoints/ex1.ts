import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name = req.query.name;

    const users = await connection(`aula48_exercicio`)
    .where("name", "like", `%${name}%`)

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No user found")
    }

    res.status(200).send(users)
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

// b)
export const getAllUsersB = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const type = req.params.type;
  
      const users = await connection(`aula48_exercicio`)
      .where("type", "like", `%${type}%`)
  
      if (!users.length) {
        res.statusCode = 404;
        throw new Error("No user found")
      }
  
      res.status(200).send(users)
    } catch (error: any) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
  };