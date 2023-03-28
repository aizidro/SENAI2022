DROP DATABASE IF EXISTS manutencao;
CREATE DATABASE manutencao CHARSET=UTF8 COLLATE utf8_general_ci;

CREATE TABLE funcionarios(
    matricula INT NOT NULL PRIMARY KEY,
    nome VARCHAR(30) NOT NULL
);

CREATE TABLE telefone(
    matricula INT NOT NULL ,
    telefone INT NOT NULL,
    FOREIGN KEY(matricula) REFERENCES funcionarios(matricula) 
);

CREATE TABLE veiculos (
    placa VARCHAR(20) NOT NULL PRIMARY KEY,
    ano DATE NOT NULL,
    modelo VARCHAR(20) NOT NULL,
    marca VARCHAR(20) NOT NULL
);

CREATE TABLE manutencao(
    id_manutencao INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(20) NOT NULL,
    matricula INT NOT NULL,
    inicio_manutencao DATE NOT NULL,
    fim_manutencao DATE NOT NULL,
    descricao VARCHAR(30) NOT NULL,
    FOREIGN KEY(matricula) REFERENCES funcionarios(matricula),
    FOREIGN KEY(placa) REFERENCES veiculos(placa)
);

LOAD DATA INFILE 'F:/SENAI2023/bcd/aula09/funcionario.CSV'
INTO TABLE funcionarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'F:/SENAI2023/bcd/aula09/telefones.CSV'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'F:/SENAI2023/bcd/aula09/carro.CSV'
INTO TABLE veiculos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'F:/SENAI2023/bcd/aula09/manutencao.CSV'
INTO TABLE manutencao
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;