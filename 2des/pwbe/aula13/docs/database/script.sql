DROP DATABASE IF EXISTS nutricao;

CREATE DATABASE nutricao;
USE nutricao;

CREATE TABLE paciente (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_completo VARCHAR(50) NOT NULL,
    nascimento DATE NOT NULL,
    peso DECIMAL(5,2) NOT NULL,
    altura DECIMAL(4,2) NOT NULL
);