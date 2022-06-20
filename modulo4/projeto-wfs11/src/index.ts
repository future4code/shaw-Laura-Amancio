import { Request, Response } from "express";
import app from "./app"
import connection from "./connection"

// CRIAR NOVO USUÁRIO
app.post('/users', async (req: Request, res: Response) => {
    try {
        const {name, nickname, email} = req.body
        if(!name || !nickname || !email){
            throw new Error("favor preencher todos os campos")
        }
        await connection('users').insert({
            name: name,
            nickname: nickname,
            email: email
        })
        res.status(201).send("Usuário criado com sucesso!")
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

// PEGAR USUÁRIO PELO ID
app.get('/users/:id', async (req: Request, res: Response) => {
    try {
        const id: Number = Number(req.params.id)

        const result = await connection('users')
        .select('id', 'nickname')
        .where({id: id})

        if(result.length === 0){
            throw new Error("Id não encontrado")
        }

        res.status(200).send(result[0]) 
    } catch (error: any) {
        switch(error.message){
            case "Id não encontrado":
                res.status(404)
                break
            default:
                res.status(500).send(error.sqlMessage || error.message)
        }
    }
})

// EDITAR USUÁRIO
app.put('/users/edit/:id', async (req: Request, res: Response) => {
    try {
        const id: Number = Number(req.params.id)
        const {name, nickname, email} = req.body
        if(!name || !nickname || !email){
            throw new Error("Preencha os campos corretamente")
        }

        await connection('users')
        .update({
            name: name,
            nickname: nickname,
            email: email
        })
        .where({ id: id})

        res.status(200).send(`Usuário(a) ${name} atualizado!`)
    } catch (error: any) {
        switch(error.message){
            case "Preencha os campos corretamente":
                res.status(422)
                break
            default:
                res.status(500).send(error.sqlMessage || error.message)
        }
    }
})

// CRIAR TAREFA
app.post('/tasks', async (req: Request, res: Response) => {
    try {
        const {title, description, limit_date, creator_user} = req.body
        if(!title || !description || !limit_date || !creator_user){
            throw new Error("Favor preencher todos os campos corretamente")
        }

        await connection('tasks')
        .insert({
            title: title,
            description: description,
            limit_date: limit_date,
            creator_user: creator_user
        })

        res.status(201).send(`Tarefa ${title} criada com sucesso`)
    } catch (error: any) {
        switch(error.message){
            case "Favor preencher todos os campos corretamente":
                res.status(404)
                break
            default:
                res.status(500).send(error.sqlMessage || error.message)
        }
    }
})

// PEGAR TAREFA PELI ID
app.get('/tasks/:id', async (req: Request, res: Response) => {
    try {
        const id: Number = Number(req.params.id)

        const result = await connection('tasks')
        .select()
        .where({id: id})

        if(result.length === 0){
            throw new Error("Tarefa não encontrada")
        }

        res.status(200).send(result[0])
    } catch (error: any) {
        switch(error.message){
            case "Tarefa não encontrada":
                res.status(404)
                break
            default:
                res.status(500).send(error.sqlMessage || error.message)
        }
    }
})

// PEGAR TODOS USUÁRIOS
app.get('/users', async (req: Request, res: Response) => {
    try {
        const result = await connection.raw('select id, nickname from users' )
        res.status(200).send(result[0])
    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})