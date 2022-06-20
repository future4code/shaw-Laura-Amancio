import axios from "axios";
import { Address } from "../types";

export const getFullAddress = async (cep: string, numero: number, complemento: string): Promise<Address | undefined> => {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address: Address = {
            logradouro: result.data.logradouro,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf,
            cep: result.data.cep,
            numero: numero,
            complemento: complemento
        }

        return address
    } catch (error) {
        return undefined
    }
}