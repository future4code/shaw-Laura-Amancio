import { AuthenticatorData } from "./../types";
import * as jwt from "jsonwebtoken"

export class Authenticator {
    public generateToken(payload: AuthenticatorData){
        const token = jwt.sign(payload,
            process.env.JWT_KEY as string,
            {})
        return token
    }
}