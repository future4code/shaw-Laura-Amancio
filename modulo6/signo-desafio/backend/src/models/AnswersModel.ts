export enum AnswerEnum {
CONCORDO = "CONCORDO",
CONCORDO_PARCIALMENTE = "CONCORDO PARCIALMENTE",
DISCORDO = "DISCORDO",
SEM_OPINIÃO = "NÃO SEI OPINAR"
}

export class AnswersModel {
    constructor(
        private poll_id: string,
        private user_id: string,
        private answer: AnswerEnum
    ){}

    public getPollId() {
        return this.poll_id
    }
    public getUserId() {
        return this.user_id
    }
    public getAnswers() {
        return this.answer
    }

    static todoAnswerModel(answer: any): AnswersModel {
        return new AnswersModel(answer.poll_id, answer.user_id, answer.answers)
    }
}