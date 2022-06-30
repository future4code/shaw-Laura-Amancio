export default class RecepieModel {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private creation_date: Date,
        private creator_id: string
    ){}
    
    public getId(): string {
        return this.id
    }
    public getTitle(): string {
        return this.title
    }
    public getDescription(): string {
        return this.description
    }
    public getCreationDate(): Date {
        return this.creation_date
    }
    public getCreatorId(): string {
        return this.creator_id
    }

    public static todoRepecieModel(result: any) {
        return new RecepieModel(result.id, result.title, result.description, result.creation_date, result.creator_id)
    }

}