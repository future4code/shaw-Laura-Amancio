export interface InputPollDTO {
    title: string,
    start_date: string,
    end_date: string
}

export interface InputEditPollDTO {
    title?: string,
    start_date?: string,
    end_date?: string
}
export interface InputEditPollBDDTO {
    title?: string,
    start_date?: Date | string,
    end_date?: Date | string
}

export class PollsModel {
    constructor(
        private id: string,
        private creator_id: string,
        private title: string,
        private start_date: Date | string,
        private end_date: Date | string
    ){}

    public getId() {
        return this.id
    }
    public getCreatorId() {
        return this.creator_id
    }
    public getTitle() {
        return this.title
    }
    public getStartDate() {
        return this.start_date
    }
    public getEndDate() {
        return this.end_date
    }

    static todoUserModel(poll: any): PollsModel {
        return new PollsModel(poll.id, poll.creator_id, poll.title, poll.start_date, poll.end_date)
    } 
}