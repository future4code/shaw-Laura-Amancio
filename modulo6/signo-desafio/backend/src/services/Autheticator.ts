import * as jwt from "jsonwebtoken"

export type authenticatorData = {
    id: string,
}

export class Authenticator {
    // private static EXPIRES_IN = "2h"

    public generateToken(payload: authenticatorData) {
        const token = jwt.sign(payload,
            process.env.JWT_KEY as string,
            {})
        
            return token
    }

    public getData(token: string): authenticatorData {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as authenticatorData
        return data
    }
}