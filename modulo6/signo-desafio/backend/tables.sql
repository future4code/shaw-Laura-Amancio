-- Active: 1657806752877@@35.226.146.116@3306@shaw-21814956-amancio
CREATE TABLE users_signo(
id VARCHAR(255) PRIMARY KEY,
nickname VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
role ENUM ("NORMAL", "ADMIN") NOT NULL DEFAULT "NORMAL"
);

SELECT * FROM users_signo;
DROP TABLE users_signo;

CREATE TABLE polls_signo(
id VARCHAR(255) PRIMARY KEY,
creator_id VARCHAR(255) NOT NULL,
FOREIGN KEY (creator_id) REFERENCES users_signo(id),
title VARCHAR(255) NOT NULL UNIQUE,
start_date DATE NOT NULL,
end_date DATE NOT NULL,
answer ENUM ("CONCORDO", "CONCORDO PARCIALMENTE", "DISCORDO", "NÃO SEI OPINAR")
);

SELECT * FROM polls_signo;
DROP TABLE polls_signo;

CREATE TABLE answers_polls_signo(
    poll_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (poll_id) REFERENCES polls_signo(id),
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users_signo(id),
    answer ENUM ("CONCORDO", "CONCORDO PARCIALMENTE", "DISCORDO", "NÃO SEI OPINAR") NOT NULL
);

SELECT * FROM answers_polls_signo;
DROP TABLE answers_polls_signo;