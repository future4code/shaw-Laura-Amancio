import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllUsers2 = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let filter = req.query.filter
    if(filter !== 'name' && filter !== 'type'){
       filter = 'email'
    }

    const users = await connection(`aula48_exercicio`)
    .select('*')
    .orderBy(`${filter}`, 'asc')

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