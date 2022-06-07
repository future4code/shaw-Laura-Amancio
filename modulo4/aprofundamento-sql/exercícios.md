## EXERCÍCIO 1

**a)** Ele vai excluir apenas a coluna salary da tabela.
**b)** Vai mudar a coluna que tem o nome de gender para sex, sendo um varchar de 6 dígitos.
**c)** Vai alterar a coluna gender (que era um varchar(6)) para uma coluna ainda gender, porém com varchar de 255 caracteres.
**d)** ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

## EXERCÍCIO 2

**a)** 
UPDATE Actor
SET name = "Laura", birth_date = "1996-07-10"
WHERE id = "003";

**b)**
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "juliana paes";

UPDATE Actor
SET name = "juliana paes"
WHERE name = "JULIANA PAES";

**c)**
UPDATE Actor
SET 
name = "Roberval",
salary = 23456789,
birth_date = "1996-12-25",
gender = "female"
WHERE id = "005";

**d)**
Ele permitiu que eu rodasse e me deu como resposta um check verdinho como se realmente funcionasse, porém na mensagem vem escrito que nenhuma linha foi modificada nem deu match, ou seja, não "bateu" com a informação  passada.

## EXERCÍCIO 3

**a)**
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

**b)**
DELETE FROM Actor 
WHERE (gender = "male" 
AND
salary > 1000000);

## EXERCÍCIO 4

**a)**
SELECT MAX(salary) FROM Actor;

**b)**
SELECT MIN(salary) FROM Actor
WHERE gender = "female";

**c)**
SELECT COUNT(*) FROM Actor
WHERE gender = "female";

**d)**
SELECT SUM(salary) FROM Actor;

## EXERCÍCIO 5

**a)** Basicamente ele me retorna a quantidade de atores e atrizes da tabela agrupados respectivamente em seus gender. Logo temos uma coluna com male e x numero de atores e outra com female e y numeros de atrizes.

**b)**
SELECT name, id FROM Actor
ORDER BY name DESC;

**c)**
SELECT * FROM Actor
ORDER BY salary ASC;

**d)**
SELECT * FROM Actor
ORDER BY salary ASC
LIMIT 3;

**e)**
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

## EXERCÍCIO 6

**a)**
ALTER TABLE Movies
ADD playig_limit_date DATE;

**b)**
ALTER TABLE Movies CHANGE rating rating FLOAT;

**c)**
UPDATE Movies
SET playig_limit_date = CURDATE() 
WHERE id = "002";

UPDATE Movies
SET playig_limit_date = 2020-12-08 
WHERE id = "001";

**d)**
DELETE FROM Movies
WHERE id = "002";

UPDATE Movies
SET synopsis = "she was a girl, he was a boy, can i make this anymore obvious?"
WHERE id = "002";

O segundo comando chega a rodar sem constar nenhum erro, porém me da a mensagem de que nenhuma linha foi modificada e nem deu Match, logo é como se o id não existisse mais.

## EXERCÍCIO 7

**a)**
SELECT COUNT(*) FROM Movies
WHERE rating > 7.5;
R: 2

**b)**
SELECT AVG(rating) FROM Movies;

**c)**
SELECT COUNT(*) FROM Movies
WHERE playig_limit_date >= CURDATE();

**d)**
SELECT COUNT(*) FROM Movies
WHERE release_date >= CURDATE();

**e)**
SELECT MAX(rating) FROM Movies;

**f)**
SELECT MIN(rating) FROM Movies;

## EXERCÍCIO 8

