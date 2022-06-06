USE `shaw-21814956-amancio`;

CREATE TABLE Actor(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

SELECT * FROM Actor;

## EXERCÍCIO 1

-- VARCHAR seria como declarar uma string com o numero de caracteres entre ().alter
-- DATE é declarado como data, vindo no formato YYYY-MM-DD.

SHOW DATABASES; 
-- Me da onde estou rodando meu banco de dados, no caso no shaw-21814956-amancio
SHOW TABLES;
-- Me da as tabelas que foram criadas nesse banco de dados
DESCRIBE Actor;
-- Me traz as descrições dos campos da minha tabela, o tipo, se é nulo ou não e qual é a primary key

## EXERCÍCIO 2

INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pire",
120000,
"1963-08-28",
"female"
);

-- b) Ele não deixa criar pois já existe uma primary key com o mesmo valor, primary key não podem se repetir na tabela, existe apenas um para cada

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- c) Preciso passar todos os parâmetros no insert into (todos são Not Null)
INSERT INTO Actor (id, salary, birth_date, gender, name)
VALUES(
  "007",
  530000,
  "1970-01-01", 
  "male",
  "Joã Miguel"
);
-- d) Faltou o name, também Not Null;
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Fernanda Torres",
  54824643,
  "1965-09-15", 
  "female"
);
-- e) Date também tem que estar entre aspas;

## EXERCÍCIO 3

SELECT * FROM Actor 
WHERE gender = "female";

SELECT salary FROM Actor
WHERE name = "Tony Ramos";

SELECT * FROM Actor 
WHERE gender = "invalid";
-- me traz uma tabela vazia, uma vez que todos meus dados são validos. 

SELECT id,name, salary FROM Actor
WHERE salary < 500000;

SELECT id, name from Actor 
WHERE id = "002";
-- o erro está na escrita de nome, que na verdade é name.

## EXERCÍCIO 4
SELECT * FROM Actor
WHERE (name LIKE "a%" OR name LIKE "j%")
AND salary > 300000;
-- a) Selecionei todas as infos de Actor e na seguunda linha coloquei a primeira condição, usando o LIKE pois faço uma comparação com mais de uma condição, por isso o parenteses. Em seguida com o AND coloco outra condição, essa de comparação mais direta e por valor.
-- b)
SELECT * FROM Actor
WHERE name LIKE "A%" 
AND salary > 350000;
-- c)
SELECT * FROM Actor
WHERE name LIKE "%g%";
-- d)
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%g%")
AND salary BETWEEN 350000 AND 900000;

## EXERCÍCIO 5
CREATE TABLE Movies(
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
release_date DATE NOT NULL,
rating INT NOT NULL
);

INSERT INTO Movies (id, title, synopsis, release_date, rating)
VALUES ("005", "Bacurau", "tem que assistir pra entender", "2022-10-06", 7),
	   ("002", "Doce de Mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10),
       ("003", "Dona Flor e seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8),
       ("004", "Tatuagem", "Clécio Wanderley é o líder da trupe teatral Chão de Estrelas. Paulete é a principal estrela da equipe. Um dia, Paulette recebe a visita de seu cunhado, o jovem Fininha, que é militar. Encantado com o universo criado pela companhia, ele logo é seduzido por Clécio. Os dois engatam um tórrido relacionamento, que coloca Fininha em situação complicada: ele precisa lidar com a repressão existente no meio militar em plena ditadura.", "2013-11-15", 10);
SELECT * FROM Movies;

## EXERCÍCIO 6

-- a) 
SELECT id, title, rating FROM Movies
WHERE id = "002";
-- b)
SELECT * FROM Movies 
WHERE title = "Tatuagem";
-- c)
SELECT id, title, synopsis FROM Movies
WHERE rating > 7;

-- EXERCÍCIO 7
-- a)
SELECT * FROM Movies
WHERE title LIKE "%vida%";
-- b)
SELECT * FROM Movies
WHERE (title LIKE "%as%" OR synopsis LIKE "%as%");
-- c)
SELECT * FROM Movies
WHERE release_date > CURRENT_TIMESTAMP;
-- d)
SELECT * FROM Movies
WHERE release_date < CURRENT_TIMESTAMP
AND (title LIKE "%a%" OR synopsis LIKE "%a%")
AND rating > 7;