DROP DATABASE IF EXISTS restaurantes;
CREATE DATABASE restaurantes CHARSET=UTF8 COLLATE utf8_general_ci;
USE restaurantes;

CREATE TABLE cliente (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    email VARCHAR(40) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

CREATE TABLE categoria (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE restaurante (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(60) NOT NULL,
    FOREIGN KEY (id) REFERENCES categoria(id)
);

CREATE TABLE cardapio (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(150) NOT NULL,
    valor FLOAT(5,2) NOT NULL,
    FOREIGN KEY (id) REFERENCES restaurante(id)
);

CREATE TABLE avaliacao (
    restauranteId INT NOT NULL,
    clienteId INT NOT NULL,
    data DATE NOT NULL,
    nota DECIMAL (2,1) NOT NULL,
    descricao VARCHAR(150) NOT NULL,
    FOREIGN KEY (restauranteId) REFERENCES restaurante(id),
    FOREIGN KEY (clienteId) REFERENCES cliente(id)                                
);

INSERT INTO cliente VALUES 
(default,"andre izidro", "usuario1@teste.com", "senha123"),
(default,"Vinicius Fechado", "usuario2@teste.com", "senha456"),
(default,"Gustavo Png", "usuario3@teste.com", "senha789"),
(default,"Samuel Profeta", "usuario4@teste.com", "senhaabc"),
(default,"Camacho Guerreiro", "usuario5@teste.com", "senhadef"),
(default,"Joao Bartolomeu", "usuario6@teste.com", "senha1234"),
(default,"Fred Pedreiro", "usuario7@teste.com", "senha5678"),
(default,"Paulo Ferraz", "usuario8@teste.com", "senha90ab"),
(default,"Rordolfo marquinhos", "usuario9@teste.com", "senhacdef"),
(default,"Relampago Marquinhos", "usuario10@teste.com", "senhaghi");
