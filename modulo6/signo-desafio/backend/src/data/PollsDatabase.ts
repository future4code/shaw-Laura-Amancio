import { BaseError } from "../error/BaseError";
import { InputEditPollBDDTO, InputEditPollDTO, PollsModel } from "./../models/PollsModel";
import { BaseDatabase } from "./BaseDatabase";

export default class PollsDatabase extends BaseDatabase {
    protected TABLE_NAME = "polls_signo"

    public async createPoll(input: PollsModel): Promise<void> {
        try {
            await this.getConnection()
            .insert(input)
            .into(this.TABLE_NAME)
        } catch (error: any) {
            throw new BaseError(500, error.message)
        }
    }

    public async findByTitle(title: string): Promise<PollsModel> {
        try {
            const result: PollsModel[] = await this.getConnection()
            .select()
            .from(this.TABLE_NAME)
            .where({title})
            return result[0] && PollsModel.todoUserModel(result[0])
        } catch (error: any) {
            throw new BaseError(500, error.message)
        }
    }

    public async findByID(id: string): Promise<PollsModel> {
        try {
            const result: PollsModel[] = await this.getConnection()
            .select()
            .from(this.TABLE_NAME)
            .where({id})
            return result[0] && PollsModel.todoUserModel(result[0])
        } catch (error: any) {
            throw new BaseError(500, error.message)
        }
    }

    public async editPoll(input: InputEditPollBDDTO, id: string): Promise<void> {
        try {
            await this.getConnection()
            .update(input)
            .from(this.TABLE_NAME)
            .where({id})
        } catch (error: any) {
            throw new BaseError(500, error.message)
        }
    }

    public async deletePoll(id: string): Promise<void> {
        try {
            await this.getConnection()
            .delete()
            .from(this.TABLE_NAME)
            .where({id})
        } catch (error: any) {
            throw new BaseError(500, error.message)
        }
    }

    public async getAllPolls(): Promise<PollsModel[]> {
        try {
            const result: PollsModel[] = await this.getConnection()
            .select()
            .from(this.TABLE_NAME)
            return result
        } catch (error: any) {
            throw new BaseError(500, error.message)
        }
    }
}