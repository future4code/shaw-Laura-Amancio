import * as jwt from "jsonwebtoken"

type AuthenticatorData ={
      id: string  
}

export class Authenticator {
    private static EXPIRES_IN = "1m"

    public generateToken(payload: AuthenticatorData) {
        const token = jwt.sign(payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: Authenticator.EXPIRES_IN
            })
        return token
    }
}