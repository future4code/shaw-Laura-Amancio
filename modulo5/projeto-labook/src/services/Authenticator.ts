import * as jwt from "jsonwebtoken"
import { authenticatorData } from "../types/authenticatorData"

export class Authenticator {
    private static EXPIRES_IN = "2h"

    public generateToken(payload: authenticatorData) {
        const token = jwt.sign(payload,
            process.env.JWT_KEY as string,
            {
                // expiresIn: Authenticator.EXPIRES_IN
            })
        
            return token
    }

    public getData(token: string): authenticatorData {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as authenticatorData
        return data
    }
}