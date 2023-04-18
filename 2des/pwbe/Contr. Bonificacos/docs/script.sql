DROP  DATABASE IF EXISTS bonificacoes;
CREATE DATABASE bonificacoes;   
USE bonificacoes;

CREATE TABLE funcionario (
    matricula VARCHAR(10) NOT NULL PRIMARY KEY,
    nome_completo VARCHAR(40) NOT NULL,
    data_admissao DATE NOT NULL,
    salario DECIMAL(7,2) NOT NULL,
    data_pagto DATE  DEFAULT CURDATE(),
    desempenho INT NOT NULL,
    bonificacao DECIMAL(10,2) AS ((salario * 0.02) * (YEAR(CURRENT_DATE()) - YEAR(data_admissao) - (DATE_FORMAT(CURRENT_DATE(), '%m%d') < DATE_FORMAT(data_admissao, '%m%d'))) * desempenho)
);

INSERT INTO funcionario VALUES
("001","José Rodrigues","2018-01-06",1300.00,DEFAULT,7,NULL),
("002","Maria Severo","2018-03-04",2200.00,DEFAULT,10,NULL),
("003","Silvia Silva","2019-05-20",3200.00,DEFAULT,10,NULL),
("004","Solange Oliveira","2020-12-11",5500.00,DEFAULT,8.5,NULL),
("005","Mariana Pontes","2021-12-13","2350.00",DEFAULT,6,NULL);