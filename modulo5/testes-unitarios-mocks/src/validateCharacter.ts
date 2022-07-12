import { InterfacePersonagens } from "../types/interfacePersonagens";

export default function validateCharacter(personagem: InterfacePersonagens): boolean {
    if(!personagem.nome || personagem.força === undefined || personagem.defesa === undefined || personagem.vida === undefined){
        return false
    }else if(personagem.defesa <= 0 || personagem.força <= 0 || personagem.vida <= 0){
        return false
    }else{
        return true
    }
}