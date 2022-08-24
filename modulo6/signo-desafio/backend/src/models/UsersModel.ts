export interface InputUserDTO {
    nickname: string,
    password: string,
}
export enum UserRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export default class UserModel {
    constructor(
        private id: string,
        private nickname: string,
        private password: string,
        private role: UserRole
    ){}

    public getId() {
        return this.id
    }
    public getNickname() {
        return this.nickname
    }
    public getPassword() {
        return this.password
    }
    public getRole() {
        return this.role
    }

    static todoUserModel(user: any): UserModel {
        return new UserModel(user.id, user.nickname, user.password, user.role)
    } 
}