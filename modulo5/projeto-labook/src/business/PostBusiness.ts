import PostData from "../data/PostData";
import { PostModel } from "../models/PostModel";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerate";
import { inputCreatePostDTO } from "../types/inputCreatePostDTO";


export default class PostBusiness{
    constructor(
        private authenticatorData: Authenticator,
        private idGenerator: IdGenerator,
        private postData: PostData
    ){}

    createPost = async (input: inputCreatePostDTO, token: string) => {
        const {picture, description, type, criation_date, creator_id} = input
        if(!picture || !description || !type){
            throw new Error("Favor preencher os campos corretamente") 
        }

        const validToken = this.authenticatorData.getData(token)
        if(!validToken){
            throw new Error("Token inválido, verificar login")
        }

        const id = this.idGenerator.generateId()

        const newPost = new PostModel(
            id,
            picture,
            description,
            criation_date,
            type,
            creator_id
        )

        await this.postData.createPost(newPost)

        return newPost
    }

    getByID = async(id: string, token: string) => {
        
        const idPost = id
        const isValidToken = this.authenticatorData.getData(token)
        if(!isValidToken){
            throw new Error("Token inválido, verificar login")
        }
        if(!idPost) {
            throw new Error("Post não encontrado")
        }
        const result = await this.postData.getByID(idPost)
        return result
    }
}