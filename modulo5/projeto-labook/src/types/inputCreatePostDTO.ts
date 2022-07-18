import { postType } from "./postType";
export type inputCreatePostDTO = {
    picture: string,
    description: string,
    criation_date: Date,
    type: postType,
    creator_id: string
}