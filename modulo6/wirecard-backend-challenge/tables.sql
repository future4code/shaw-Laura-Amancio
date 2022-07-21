-- Active: 1657806752877@@35.226.146.116@3306@shaw-21814956-amancio
CREATE TABLE buyers_wirecard(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,    
    cpf VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE clients_wirecard(
    id VARCHAR(255) PRIMARY KEY
);

CREATE TABLE payment_wirecard(
    id VARCHAR(255) PRIMARY KEY,
    client_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients_wirecard(id),
    buyer_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES buyers_wirecard(id),
    amount FLOAT NOT NULL,
    type ENUM("CARTÃO DE CRÉDITO", "BOLETO") NOT NULL,
    status ENUM ("A PAGAR", "PAGO") NOT NULL DEFAULT "A PAGAR"
);

CREATE TABLE card_wirecard(
    id VARCHAR(255) PRIMARY KEY,
    buyer_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES buyers_wirecard(id),
    card_holder VARCHAR(255) NOT NULL,
    card_number INT NOT NULL,
    card_expiration_date VARCHAR(255) NOT NULL,
    card_cvv INT NOT NULL 
);

SELECT * FROM payment_wirecard;

DROP TABLE payment_wirecard;

SELECT * FROM clients_wirecard;
SELECT * FROM buyers_wirecard;
SELECT * FROM payment_wirecard;

INSERT INTO clients_wirecard
VALUES ("b624c8c8-5531-42b8-9e73-38ce538f7383");