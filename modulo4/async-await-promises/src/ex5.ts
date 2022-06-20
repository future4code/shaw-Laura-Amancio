import axios from "axios"
import { baseURL } from "./baseUrl"

type User = {
    id: string,
    name: string,
    email: string
}

const  notifySubs = async (users: User[], message: string): Promise<void> => {
    for(const user of users) {
        try {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
            console.log("Notificação enviada!")
        } catch (error) {
            console.log(`Erro ao enviar a ${user}`)
        }
    }
}
