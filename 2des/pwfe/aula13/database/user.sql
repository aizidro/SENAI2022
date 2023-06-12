drop database if exists usuarios;
create database usuarios;
use usuarios;

create table users (
    id int not null primary key auto_increment,
    nome varchar(50) not null,
    cpf varchar(15) not null,
    nascimento date not null,
    email varchar(50) not null,
    senha varchar(50) not null
);

create table endereco (
    id_users int not null primary key,
    cep varchar(11) not null,
    numero varchar(15) not null,
    complemento varchar(100) not null,
    foreign key (id_users) references users (id)
);

create  table telefones (
    id_users int not null,
    telefone varchar(20) not null,
    foreign key (id_users) references users (id)
);

insert into users values
(default,'Passos Dias Aguiar','123.456.789-01','2000-03-01','passos@email.com',password('123456')),
(default,'Rafaela Dias Alves','824.226.489-00','1950-09-12','rafa@email.com',password('246810')),
(default,'Marcelo Pedreira Raul','918.390.123-11','2005-05-04','macelo@gmail.com',password('3691215')),
(default,'Joao Alveres Souza','987.789.432-91','1980-07-02','joao@hotmail.com',password('481216'));


insert into endereco values
(1,'13914-552','2925','AL11 AP01'),
(2,'13910-123','1234','CL12 AP10'),
(3,'10114-345','8765','BL99 AP20'),
(4,'13244-987','9876','rua da Saudade');

insert into telefones values
(1,'19-99874-8789'),
(2,'19-994501020'),
(3,'19-973201020'),
(4,'19-971908090');


SELECT * FROM users WHERE email = 'seu_email' AND senha = password('sua_senha');
