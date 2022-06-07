import express, {Request, Response} from "express"
import cors from "cors"
import { users } from "./data"
import { randomUUID } from "crypto"


const app = express()
app.use(express.json())
app.use(cors())

app.get('/users', (req: Request, res: Response) => {
    res.send(users).status(200)
})

app.get('/users/saldo', (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const cpf: number = Number(req.query.cpf)
        const nome = req.query.nome
        const acharSaldo = users.filter((user)=>{
            if(user.cpf === cpf && user.nome === nome){
                return user
            }
        }).map((user) =>{
            return user.saldo
        })
        if(acharSaldo.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }
        res.status(200).send(acharSaldo)
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

app.post('/users/cadastro', (req: Request, res: Response) => {
    try {
        const {id, nome, cpf, nascimento, saldo, transacoes} = req.body
        req.body.id = randomUUID()
        req.body.saldo = 0
        req.body.transacoes = []

        const hoje: Date = new Date()
        const arrayNascimento: number[] = nascimento.split("/").map((item: string) => {
            return parseInt(item)
        })
        let ano: number = hoje.getFullYear() - arrayNascimento[2]
        const mes: number = (hoje.getMonth() +1) - arrayNascimento[1]
        if(mes < 0) {
            ano = ano - 1
        }
        if(mes === 0 && hoje.getDate() < arrayNascimento[0]){
            ano = ano - 1
        }

        if(ano < 18){
            throw new Error("Precisa ser maior de 18 anos para abrir conta conosco.")
        }

        // const addUser = users.filter((user) =>{
        //     if(user.cpf === cpf){
        //         throw new Error("CPF já cadastrado")
        //     }else{
        //         [...users, req.body]
        //     }
        // })
        
        const addUser =  [...users, req.body]
        res.send(addUser).status(200)
    } catch (error: any) {
        switch(error.message){
            case "Precisa ser maior de 18 anos para abrir conta conosco.":
                res.status(422)
                break
            default:
                res.send(error.mesage)
        }
        res.send(error.message)
    }
})

app.put('/users/saldo', (req:Request, res: Response) => {
    try {
        const {nome, cpf, valor} = req.body

        const addValor = users.filter((user)=>{
            if(nome === user.nome && cpf === user.cpf){
                user.saldo = valor + user.saldo
                return user
            }else{
                throw new Error("Usuário não encontrado")
            }
        })
    
        res.send(addValor)
    } catch (error: any) {
        res.send(error.message)
    }
   
})




app.listen(3003, () => {
    console.log("Está rodando no 3003")
})