import { connection } from "./connection";
import app from "./app";
import {Request, Response} from "express";

// EXERCÍCIO 1
// a) Ele nos retorna todas as informações que contém no SQL, algumas informações que não são úteis ao usuário (os dados da tabela).
app.get('/todosatores', async(req, res) =>{
    try {
        const result = await connection.raw(`
        SELECT * from Actor
        `)
        res.send(result[0])
    } catch (error) {
        res.send(error)
    }
})

// b)
app.get('/Ator', async (req: Request, res: Response) => {
    try {
        const name: string = req.query.name as string
        const result = await connection.raw(`
        SELECT * from Actor
        WHERE name = "${name}"
        `
        )
        res.send(result[0][0])
    } catch (error) {
        res.status(200).send(error)
    }
})

// c)
app.get('/Actor/gender', async (req: Request, res: Response) => {
    try {
        const gender: string = req.query.gender as string
        const result = await connection.raw(`
        SELECT COUNT (*) from Actor
        WHERE gender = "${gender}"
        `)
        res.status(200).send(result[0][0])
    } catch (error) {
        console.log(error)
    }
})

// EXERCÍCIO 2

// a)
app.put('/Actor/:id', async (req: Request, res: Response) =>{
    try {
        const id = req.params.id
        const salary = req.body.salary
        await connection('Actor')
        .update({
            salary: salary
        })
        .where({id: id})
        res.status(202).send('Salário atualizado')
    } catch (error) {
        res.send(error)
    }
})

// b)
app.delete('/Actor/:id', async (req: Request, res: Response) =>{
    try {
        const id = req.params.id
        await connection('Actor')
        .delete()
        .where({
            id: id
        })
        res.status(200).send('Ator deletado')
    } catch (error) {
        res.status(400).send(error)
    }
})

// c)
app.get('/Actor/salary', async(req: Request, res: Response) => {
    try {
        const gender: string = req.query.gender as string
        const result = await connection('Actor')
        .select()
        .avg('salary')
        .where({
            gender: gender
        })
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

// EXERCÍCIO 3

// a)
app.get('/actorby/:id', async(req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await connection('Actor')
        .select()
        .where({
            id: id
        })
        res.status(200).send(result[0])
    } catch (error) {
        res.send(error)
    }
})

// b)
app.get('/actor', async (req:Request, res:Response) => {
    try {
        const gender: string = req.query.gender as string
        const result = await connection('Actor')
        .select()
        .count('*')
        .where({
            gender: gender
        })
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

// EXERCÍCIO 4
// a)
app.put('/Actoridnobody', async (req: Request, res: Response) =>{
    try {
        const id = req.body.id
        const salary = req.body.salary
        await connection('Actor')
        .update({
            salary: salary
        })
        .where({id: id})
        res.status(202).send('Salário atualizado')
    } catch (error) {
        res.send(error)
    }
})

// b)
app.delete('/Actor4/:id', async (req: Request, res: Response) =>{
    try {
        const id = req.params.id
        await connection('Actor')
        .delete()
        .where({
            id: id
        })
        res.status(200).send('Ator deletado')
    } catch (error) {
        res.status(400).send(error)
    }
})