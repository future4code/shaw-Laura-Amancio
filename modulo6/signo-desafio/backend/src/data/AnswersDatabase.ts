import { BaseError } from "../error/BaseError";
import { AnswersModel } from "../models/AnswersModel";
import { BaseDatabase } from "./BaseDatabase";

export default class AnswersDatabase extends BaseDatabase {
    protected TABLE_NAME = "answers_polls_signo"

    public async registerAnswer(input: AnswersModel): Promise<void> {
        try {
            await this.getConnection()
            .insert(input)
            .into(this.TABLE_NAME)
        } catch (error: any) {
            throw new BaseError(500, error.message)
        }
    }

    public async getVotes(poll_id: string) {
        try {
            const result = await this.getConnection()
            .select("answer")
            .count("answer as votes")
            .from(this.TABLE_NAME)
            .where({poll_id})
            .groupBy("answer")
            return result
        } catch (error: any) {
            throw new BaseError(500, error.message)
        }
    }

    public async getVoteByUserAndPoll(poll_id: string, user_id: string) {
        try {
            const result: AnswersModel[] = await this.getConnection()
            .select()
            .from(this.TABLE_NAME)
            .where({poll_id})
            .andWhere({user_id})
            return result
        } catch (error: any) {
            throw new BaseError(500, error.message)
        }
    }

    public async deleteAllAnswers(poll_id: string) {
        try {
            await this.getConnection()
            .delete()
            .from(this.TABLE_NAME)
            .where({poll_id})
        } catch (error:any) {
            throw new BaseError(500, error.message)
        }
    }
}

