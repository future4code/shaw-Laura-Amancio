import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllUsers4 = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let filter = req.query.filter
    let order = req.query.order
    let name = req.query.name
    let page = Number(req.query.page)
    const size = 5

    if(!name){
        name = ''
    }
    if(order !== 'asc' && order !== 'desc'){
        order = 'desc'
    }
    if(filter !== 'name' && filter !== 'type'){
        filter = 'name'
    }
    if(page < 1 || isNaN(page)){
        page = 1
    }
    
    let offset = (page -1) * size
    
    const users = await connection(`aula48_exercicio`)
    .where('name', 'like', `%${name}%`)
    .orderBy(`${filter}`, `${order}`)
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