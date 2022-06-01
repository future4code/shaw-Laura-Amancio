type Funcionarios = {
    name: string,
    email: string,
    role: string
}

const trabalhadores: Funcionarios[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function qualEmail (funcionario: Funcionarios[]): String[] {
    const filtrandoEMapeando: string[]  = funcionario.filter((role) => {
        return (role.role === "admin")
    }).map((email) =>{
        return (email.email)
    })

    return filtrandoEMapeando
}

console.table(qualEmail(trabalhadores))