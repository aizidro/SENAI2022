
DROP DATABASE IF EXISTS imobiliaria;
CREATE DATABASE imobiliaria;
USE imobiliaria;

CREATE TABLE corretores (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    matricula VARCHAR(10) NOT NULL UNIQUE,
    senha VARCHAR(10) NOT NULL,
    salario FLOAT(6,2) NOT NULL
);

CREATE TABLE status (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20)
);

CREATE TABLE imoveis (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    corretor_id INT NOT NULL,
    codigo VARCHAR(20) NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    valor_venda FLOAT(10,2) NOT NULL,
    valor_aluguel FLOAT(10,2) NOT NULL,
    id_status INT NOT NULL,
    FOREIGN KEY (corretor_id) REFERENCES corretores(id),
    FOREIGN KEY(id_status) REFERENCES status(id)
);

INSERT INTO corretores VALUES
(default, "zeh das vendas", "m001", "abc123", 2500.00),
(default, "Josenildo Moveis", "m002", "abc321", 1900.60),
(default, "Ramiro Gonsalves", "m003", "abc456", 2450.20);

INSERT INTO status VALUES
(default, "disponível"),
(default, "alugado"),
(default, "vendido");

INSERT INTO imoveis VALUES
(default, 1, "KSA", "Rua das avenidas 84", 400000, 15000, 1),
(default, 2, "APT", "Avenida das ruas - bloco 52", 100000, 1200, 2);

