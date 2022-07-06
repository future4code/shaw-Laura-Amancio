import { HashManage } from "./../services/HashManage";
import { inputLofinDTO } from "./../types/inputLoginDTO";
import UserData from "../data/UserData";
import { UserModel } from "../models/UserModel";
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
        if(!name || !email || !password){
            throw new Error("Campos inválidos, favor preencher corretamente")
        }
     
        const registeredUser = await this.userData.findEmail(email)
        if(registeredUser){
            throw new Error("Email já cadastrado")
        }
       
        const id = this.idGenerator.generateId()
        
        const hashPass = await this.hashManage.hashPassword(password)
       
        const newUser = new UserModel(
            id,
            name,
            email,
            hashPass
        )
        await this.userData.createUser(newUser)
        
        const token = this.authenticator.generateToken({id})
        
        return token
    }

    login = async (input: inputLofinDTO) => {
        const {email, password} = input 
        // validação
        if(!email || !password) {
            throw new Error("Favor preencher os campos corretamente")
        }

        const user = await this.userData.findEmail(email)
        if(!user){
            throw new Error("Email ou senha inválidos")
        }

        const passCorrect: boolean = await this.hashManage.compare(password, user.password)

        if(!passCorrect){
            throw new Error("Email ou senha inválidos")
        }
        // gerar um token de usuário

        const token = this.authenticator.generateToken(user.id)
        // retornar token usuário

        return token
    }

}





