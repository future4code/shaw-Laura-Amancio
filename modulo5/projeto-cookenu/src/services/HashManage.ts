import * as bcrypt from "bcryptjs"

export class HashManage {
    public async hashPassword(password: string) {
        const rounds = Number(process.env.BCRYPTO_COST)
        const salt = await bcrypt.genSalt(rounds)
        const result = await bcrypt.hash(password, salt)
        return result
    }

    public async compare(password: string, hash: string) {
        const result = await bcrypt.compare(password, hash)
        return result
    } 
}