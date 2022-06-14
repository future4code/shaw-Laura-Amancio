import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllUsers3 = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let page = Number(req.query.page)
    const size = 5

    if(page < 1 || isNaN(page)){
        page = 1
    }

    let offset = (page -1) * size

    const users = await connection(`aula48_exercicio`)
    .select('*')
    .limit(size)
    .offset(offset)

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