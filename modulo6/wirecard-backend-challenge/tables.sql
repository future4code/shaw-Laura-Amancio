-- Active: 1657806752877@@35.226.146.116@3306@shaw-21814956-amancio
CREATE TABLE buyers_wirecard(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,    
    cpf INT UNIQUE NOT NULL
);

CREATE TABLE clients_wirecard(
    id VARCHAR(255) PRIMARY KEY
);

CREATE TABLE payment_wirecard(
    id VARCHAR(255) PRIMARY KEY,
    client_id VARCHAR(255) UNIQUE NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients_wirecard(id),
    buyer_id VARCHAR(255) UNIQUE NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES buyers_wirecard(id),
    amount FLOAT NOT NULL,
    type ENUM("CARD", "BOLETO") NOT NULL,
    status ENUM ("A_PAGAR", "PAGO") NOT NULL DEFAULT "A_PAGAR"
);

CREATE TABLE card_wirecard(
    buyer_id VARCHAR(255) UNIQUE NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES buyers_wirecard(id),
    card_holder VARCHAR(255) NOT NULL UNIQUE,
    card_number INT NOT NULL UNIQUE,
    card_expiration_date VARCHAR(255) NOT NULL,
    card_cvv INT NOT NULL 
);