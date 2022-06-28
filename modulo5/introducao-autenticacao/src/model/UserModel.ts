export enum UserRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class UserModel {
    constructor(
        private id: string,
        private email: string,
        private password: string,
        private role: UserRole
    ){}

    public getId(): string {
        return this.id
    }
    public getEmail(): string {
        return this.email
    }
    public getPassword(): string {
        return this.password
    }
    public getRole(): UserRole{
        return this.role
    }

    public static todoUserModel(result: any) {
        return new UserModel(result.id, result.email, result.password, result.role)
    }
}