import axios from "axios"
import { baseURL } from "./baseUrl"

type User = {
    id: string,
    name: string,
    email: string
}

// a) Ele basicamente, ao inves de esperar a primeira requisição terminar para mandar a outra, ele condensa tudo num array de Promises,
//    processa ele todo e depois retorna com um outra Promise dentro de array que contém as respostas.
// b) Com a promise.all você otimiza a velocidade do código, pensando em aplicações com milhões de usuários,
//    usando o .all, fica bem mais rápido, não precisa ficar esperando um por um.
// c)
const notifyAllUsers = async (users: User[], message: string): Promise<void> => {
    try {
        const requests = users.map((user) =>{
                axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
        })
        await Promise.all(requests)
        console.log("Notificações enviadas com sucesso")
    } catch (error) {
        console.log("Problema em notificar")
    }
}
