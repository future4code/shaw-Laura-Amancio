import axios from "axios"
import { baseURL } from "./baseUrl"

// a) O endpoint GET/subscribers;
// b) :Promise<any>
// c)
async function getAllSubs ():Promise<any> {
    const resp = await axios.get(`${baseURL}/subscribers`)
    return resp.data
}

const main = async (): Promise<void> =>{
    try {
        const subscribers = await getAllSubs()
        console.log(subscribers)
    } catch (error: any) {
        console.log(error)
    }
}

main()