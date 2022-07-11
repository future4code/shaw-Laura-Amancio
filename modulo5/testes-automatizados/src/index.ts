import { User } from "./models/UserModel"

export default function performPurchase(user: User, valor: number): User | undefined {
    if(user.saldo >= valor){
        return {
            ...user,
            saldo: user.saldo - valor
        }
    }
    return undefined
} 