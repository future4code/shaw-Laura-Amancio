import axios from "axios"
import { baseURL } from "./baseUrl"

type User = {
    id: string,
    name: string,
    email: string
}
// a) A diferença está primeiramente na ordem das coisas. Na primeira, cmo eu já chamo direto a função, preciso do async
//    em primeiro lgar e do await logo antes da chamada do axios.Já na segunda, eu preciso criar primeiro uma função, e 
//    e depois do =, quano vai começar a função eu coloco o async. Nos dois casos o await vai na mesma posição.
// b)
const getAllSubscribes = async (): Promise<User> => {
    const resp = await axios.get(`${baseURL}/subscribers`)
    return resp.data
}

const main = async (): Promise<void> =>{
    try {
        const subscribers = await getAllSubscribes()
        console.log(subscribers)
    } catch (error: any) {
        console.log(error)
    }
}

main()