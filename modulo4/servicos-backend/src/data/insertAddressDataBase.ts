import { Address } from "../types";
import { connection } from "./connection";

export async function insertAddressDataBase(address: Address){
   const {logradouro, bairro, cidade, estado, cep, numero, complemento} = address
   
   await connection('user_address')
   .insert({
    logradouro,
    bairro,
    cidade,
    estado,
    cep,
    numero,
    complemento
   })
}