### EXERCÍCIO 1

**a)** Sim, uma vez que com o uso de strings, tenho uma quantidade de possibilidades MUITO maior que uso apenas de números. Com string, além do uso de números e letras, também podemos usar caracteres especiais, como &, @, *, entre outros.

### EXERCÍCIO 2

**a)** O código em questão primeiramente cria uma const que vai guardar o nome da tabela que vamos consumir do Banco de dados. Depois faz a conexão da nossa aplicação com o banco de dados usando o connection e as infomações sensíveis que estão no .env. Após isso, ele cria a função que cria/ adiciona um usuário nessa tabela, sempre com async e await, pois precisa esperar a resposta do Banco. Passa as informações que compõem um user da tabela de forma desestruturada (id, email, password) e então espera a conexão com o banco e add as infos com a query .insert e .into.

**b)** 
CREATE TABLE Users(
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);

### EXERCÍCIO 3

**a)** Ela força o Typescript a tipar aquilo como string, uma vez que ele pode voltar como undefined, o que acaba gerando um errinho de tipagem que atrapalha a sequencia do código.

## EXERCÍCIOS DE CRIPSTOGRAFIA

### EXERCÍCIO 2

**c)** Nesse momento não, pois não é usado criptografia de senha nele, apenas o token.