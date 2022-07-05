import UserData from "../data/UserData";
import { UserModel } from "../models/UserModel";
import { HashManage } from "../services/HashManage";
import { IdGenerator } from "../services/IdGenerate";
import { inputSignupUserDTO } from "../types/inputSignupUserDTO";
import { Authenticator } from "./../services/Authenticator";


export default class UserBusiness {
    constructor(
        private authenticator: Authenticator,
        private userData: UserData,
        private idGenerator: IdGenerator,
        private hashManage: HashManage
    ){}

    signup = async (input: inputSignupUserDTO) => {
        const {name, email, password} = input
        // validação
        if(!name || !email || !password){
            throw new Error("Campos inválidos, favor preencher corretamente")
        }
        // conferir se usuário existe
        const registeredUser = await this.userData.findEmail(email)
        if(registeredUser){
            throw new Error("Email já cadastrado")
        }
        //criar um id
        const id = this.idGenerator.generateId()
        // hashear a senha
        const hashPass = await this.hashManage.hashPassword(password)
        // inserir usuário no bd
        const newUser = new UserModel(
            id,
            name,
            email,
            hashPass
        )
        await this.userData.createUser(newUser)
        // gerar um token de usuário
        const token = this.authenticator.generateToken({id})
        // retornar token usuário
        return token
    }

}





