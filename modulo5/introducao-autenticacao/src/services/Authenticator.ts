import * as jwt from "jsonwebtoken"

type AuthenticatorData ={
      id: string  
      role: string
}

export class Authenticator {
    private static EXPIRES_IN = "1h"

    public generateToken(payload: AuthenticatorData) {
        const token = jwt.sign(payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: Authenticator.EXPIRES_IN
            })
        return token
    }

    public getData(token: string): AuthenticatorData {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticatorData
        return data
    }
}