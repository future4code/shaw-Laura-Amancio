import axios from "axios"
import { baseURL } from "./baseUrl"

type User = {
    id: string,
    name: string,
    email: string
}
// a) Não, pois o que nos é retornado é exatamente a informação de User.
// b) Acredito que seja um boa prática para podermos ter como resposta um objeto já tipado. Deinxando o código mais fácil e direto posteriormente para se mexer.
// c)
const getAllSubs2 = async (): Promise<User> => {
    const resp = await axios.get(`${baseURL}/subscribers`)
    return resp.data.map((res:any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

const main = async (): Promise<void> =>{
    try {
        const subscribers = await getAllSubs2()
        console.log(subscribers)
    } catch (error: any) {
        console.log(error)
    }
}

main()