import { InterfacePersonagens } from "./../types/interfacePersonagens"
import validateCharacter from "./validateCharacter"

export function performAttack(attacker: InterfacePersonagens, defender: InterfacePersonagens) {
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error("Invalid Character")
    }
    if(attacker.força > defender.defesa){
        defender.vida -= attacker.força - defender.defesa
    }
}

export function performAttackDependecie(
    attacker: InterfacePersonagens, 
    defender: InterfacePersonagens,
    validator: (input: InterfacePersonagens) => boolean
    ) {
    
        if(!validator(attacker) || !validator(defender)){
            throw new Error("Invalid Character")
        }
        if(attacker.força > defender.defesa){
            defender.vida -= attacker.força - defender.defesa
        }
}

// c) A diferença entre as duas está na forma como são declaradas, a primeira eu 
//    chamo direto a função de validar dentro da minha função, já a segunda eu
//    uso um validator como parametro de validação, podendo receber a função que quero
//    para fazer essa validação.