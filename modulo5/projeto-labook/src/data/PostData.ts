import { PostModel } from "../models/PostModel"
import { BaseDatabase } from "./BaseDatabase"

export default class PostData extends BaseDatabase {
    protected TABLE_NAME = "LaBook_posts"

    public async createPost(input: PostModel){
        try {
            await BaseDatabase.connection(this.TABLE_NAME)
            .insert(input)
        } catch (error: any) {
            throw new Error(error.sqlmessage || error.message)
        }
    }
}