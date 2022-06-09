## EXERCÍCIO 1

**a)** Uma chave estrangeira nada ais é que uma chave que vai ligar uma tabela com a outra, normalmente usando nometabelaid com o id da nometabela.

**b)**
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
	"005",
    "achei fenomenal",
    10,
    "005"
);

**c)** Ele aponta um erro na chave estrtangeira, não podendo adicionar ou atualizar.

**d)**
ALTER TABLE Movies 
DROP rating;

**e)** Ele não deixa, me avisando de um erro também na chave estrangeira. Não pode apagar uma linha que tem algum grau de parentesco com outrta tabela.

## EXERCÍCIO 2

**a)** Ela é basicamente uma tabela de ligação, que faz a ligação dos atores com os filmes por meio dos ids. Nela eu condenso as informações de quais atores fazem parte de x filmes e vice-versa.

**b)**
INSERT INTO  MovieCast (movie_id, actor_id)
VALUES ("001", "002"), ("001", "003"), ("003", "005"), ("004", "007"),
("004","006"), ("005","003"), ("005","003");

**c)** Ele me da um erro na chave estrangeira também, uma vez que na hora de fazer a validação, não encontra o id colocado, seja no movie_id ou no actor_id.

**d)** Ele não me deixa apagar alegando problema na chave estrtangeira, não pode apagar algo que tem algum "grau de parentesco" com outra tabela abaixo.

## EXERCÍCIO 3

**a)** O operador ON é como se fosse um onde, no caso: seleciona pra mim da tabela Movie junto da tabela Rating, onde o id da tabela Movie é igual ao movie_id da tabela Rating. Ele seria o condicional de comparação, o que escolhe o qe vai ser batido para ser retornado.

**b)**
SELECT title, Movies.id, rate FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;