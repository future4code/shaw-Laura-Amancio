/*EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

    1) 10 numa linha e na outra 10 5.
    2) 10, 10, 10.
    3)  "let p = prompt("Quantas horas você trabalha por dia?")
        let t = prompt("Quanto você recebe por dia?")
        alert(`Voce recebe ${t/p} por hora`)"

        Resp: let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
              let salarioDiario = prompt ("Quanto você recebe por dia?")
              alert('Voce recebe ${salarioDiario/horasTrabalhadas} por hora')
              Esta formula primeiro coleta os dados de hora trabalhada e valor do trabalhado
              diario para depois dividir valor por horas e me dar o valor de quanto eu recebo por hora.
*/

// EXERCÍCIO DE ESCRITA DE CÓDIGO

//1)
    //a/b/c)
    let nome
    let idade 
    console.log (typeof nome, typeof idade)
    // d) Foi impresso indefinido para os dois, uma vez que o console não tem um valor para atribuir, logo fica indefinido.

    //e
    let qualNome = prompt ("Qual seu nome?")
    let qualIdade = prompt ("Qual sua idade?")
    console.log (typeof qualNome, typeof qualIdade)
    //f) Ambos aparecem como String, o console, mesmo eu colocando um número na idade, ele ainda entende como String por não ter uma especificação

    //g)
    console.log ("Olá", qualNome ,", você tem", qualIdade, "anos.")

//2)a-
    let corCamiseta = prompt ("Sua camiseta é preta?")
    let oculos = prompt ("Você usa óculos?")
    let maiorIdade = prompt ("Você é maior de idade?")

    console.log ("Sua camiseta é preta?", corCamiseta)
    console.log ("Você usa óculos?", oculos)
    console.log ("Você é maior de idade?", maiorIdade)

//3)
    let a = 10
    let b = 25
    let c = a 
    a = b
    b = c

    console.log ("O novo valor de a é", a)
    console.log ("O novo valor de b é", b)


    
