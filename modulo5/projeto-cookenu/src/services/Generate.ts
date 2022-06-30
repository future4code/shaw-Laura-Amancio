import { v4 } from "uuid";

export class Generate {
    public generateId(): string {
        return v4()
    }
}