import axios from "axios"
import { baseURL } from "./baseUrl"

const news = {
    title: "Lula é o novo presidente da Repúplica",
    content: "Lula é eleito no primeiro turno e asssume novamente a presidência do Brasil.",
    date: Date.now()
}

// a) É uma fuunção assincrona de tipo PUT.
// b)
const createNews = async (news: any): Promise<void> =>{
    return await axios.put(`${baseURL}/news`, news)
}

const main = async (): Promise<void> =>{
    try {
        await createNews(news)
        console.log(createNews(news))
    } catch (error: any) {
        console.log(error)
    }
}

main()