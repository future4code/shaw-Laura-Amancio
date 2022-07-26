-- Active: 1657806752877@@35.226.146.116@3306@shaw-21814956-amancio
CREATE TABLE competicao(
    id VARCHAR(255) PRIMARY KEY,
    name ENUM("100m Classificatória1","100m Classificatória2", "100m quartas final", "100m semifinal", "100m final", "Dardo classificatória1", "Dardo classificatória2", "Dardo quartas final", "Dardo semifinal", "Dardo final") UNIQUE NOT NULL,
    status ENUM("FINALIZADA", "ACONTECENDO AGORA", "AGUARDANDO") DEFAULT "AGUARDANDO" NOT NULL
);

CREATE TABLE resultados(
    competicao_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (competicao_id) REFERENCES competicao(id),
    atleta VARCHAR(255) NOT NULL UNIQUE,
    value FLOAT NOT NULL,
    unidade ENUM ("s", "m") NOT NULL
);

DROP TABLE resultados;