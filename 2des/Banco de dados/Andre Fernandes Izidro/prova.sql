DROP DATABASE IF EXISTS alugueis;
CREATE DATABASE alugueis CHARSET=UTF8 COLLATE utf8_general_ci;
USE alugueis;

CREATE TABLE clientes(
    cpf VARCHAR(15) NOT NULL PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    endereco varchar(100) NOT NULL

);

CREATE TABLE telefones(
   cpf VARCHAR(15) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    FOREIGN KEY(cpf) REFERENCES clientes(cpf)
);

CREATE TABLE veiculos(
    placa VARCHAR(30) NOT NULL PRIMARY KEY,
    modelo VARCHAR(40) NOT NULL,
    marca VARCHAR(30) NOT NULL,
    ano INT NOT NULL
);


CREATE TABLE alugueis(
    cpf VARCHAR(15) NOT NULL,
    placa VARCHAR(30) NOT NULL,
    diaria DATE NOT NULL,
    id_aluguel INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    aluguel INT NOT NULL,
    devolucao DATE NOT NULL,
    observacao VARCHAR(100),
    FOREIGN KEY(cpf) REFERENCES clientes(cpf),
    FOREIGN KEY(placa) REFERENCES veiculos(placa)

);

LOAD DATA INFILE 'D:/senai2022/2des/Banco de dados/prova/clientes.CSV'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/senai2022/2des/Banco de dados/prova/telefones.CSV'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/senai2022/2des/Banco de dados/prova/veiculos.CSV'
INTO TABLE veiculos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/senai2022/2des/Banco de dados/prova/alugueis.CSV'
INTO TABLE alugueis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;