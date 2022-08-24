import UserDatabse from "../data/UsersDatabase";
import { BaseError } from "../error/BaseError";
import UserModel, { InputUserDTO, UserRole} from "../models/UsersModel";
import { Authenticator } from "../services/Autheticator";
import { HashManage } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { userAdmin } from "../mocks/UsersMock";

export default class UsersBusiness {
    constructor(
        private idGenerator = new IdGenerator,
        private authenticator = new Authenticator,
        private hash = new HashManage,
        private userData = new UserDatabse
    ){}

    public signUp = async(input: InputUserDTO) => {
        try {
            const {nickname, password} = input
            let role

            if(!nickname || !password){
                throw new BaseError(422, "Please fill all fields")
            }

            const registeredNickname = await this.userData.findNickname(nickname)
            if(registeredNickname){
                throw new BaseError(400, "This nickname is already registered") 
            }

            if(password.length < 7){
                throw new BaseError(400, "The password must have at least 7 characters")
            }

            if(userAdmin.includes(nickname)){
                role = UserRole.ADMIN
            }else{
                role = UserRole.NORMAL
            }

            const id: string = this.idGenerator.generate()
            const hashPass: string = await this.hash.hashPassword(password)

            const newUser = new UserModel(
                id,
                nickname.toLowerCase(),
                hashPass,
                role
            )

            await this.userData.signUp(newUser)

            const token = this.authenticator.generateToken({id})

            return token
        } catch (error: any) {
            throw new BaseError(400, error.message)
        }
    }

    public login = async(input: InputUserDTO) => {
        try {
            const {nickname, password} = input

            if(!nickname || !password){
                throw new BaseError(422, "Please fill all fields")
            }

            const user = await this.userData.findNickname(nickname)
            if(!user){
                throw new BaseError(400, "Nickname or passward incorrect")
            }

            const passCorrect: boolean = await this.hash.compare(password, user.getPassword())
            if(!passCorrect){
                throw new BaseError(400, "Nickname or passward incorrect")
            }
            const id: string = user.getId()
            const token = this.authenticator.generateToken({id})
            
            return token
        } catch (error: any) {
            throw new BaseError(400, error.message)
        }
    }
}