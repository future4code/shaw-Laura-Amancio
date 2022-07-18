import { postType } from "../types/postType";

export class PostModel {
    constructor(
        private id: string,
        private picture: string,
        private description: string,
        private criation_date: Date,
        private type: postType,
        private creator_id: string
    ){}
}