const tarefas = ["fazer ex de hoje"]
const query = process.argv[2]

const novaLista = tarefas.push(query) 

console.log(tarefas)