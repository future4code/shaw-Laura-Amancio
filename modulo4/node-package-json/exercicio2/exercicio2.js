const query1 = process.argv[2]
const query2 = Number(process.argv[3])
const query3 = Number(process.argv[4])

switch(query1) {
    case "add":
        console.log(`Resposta: ${query2 + query3}`)
        break;
    case "sub": 
        console.log(`Resposta: ${query2 - query3}`)
        break;
    case "mult":
        console.log(`Resposta: ${query2 * query3}`)
        break;
    case "div":
        console.log(`Resposta: ${query2 / query3}`)
        break;
}

// DESAFIO

const calculos = (query1, query2, query3) =>{
    if( !query1 || !query2 || !query3){
        return console.log('\x1b[36m%s\x1b[0m', "Parâmetros inválidos")
    }else{
        switch(query1) {
            case "add":
                console.log('\x1b[33m%s\x1b[0m',`Resposta: ${query2 + query3}`)
                break;
            case "sub": 
                console.log(`Resposta: ${query2 - query3}`)
                break;
            case "mult":
                console.log(`Resposta: ${query2 * query3}`)
                break;
            case "div":
                console.log(`Resposta: ${query2 / query3}`)
                break;
        }
    }
}

calculos(query1, query2, query3)