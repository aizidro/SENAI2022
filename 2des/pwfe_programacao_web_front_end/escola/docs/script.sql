DROP DATABASE IF EXISTS escola;
CREATE DATABASE escola CHARSET=UTF8 COLLATE utf8_general_ci;
USE escola;

CREATE table professor(
    id int not null primary key AUTO_INCREMENT,
    nome varchar (30) not null ,
    especialidade varchar(50) 
);

CREATE table turma(
    id int not null primary key AUTO_INCREMENT,
    nome varchar (30) not null ,
    abreviacao varchar(15) 
);

CREATE table aluno(
    ra varchar(20) not null primary key, 
    nome varchar (30) not null ,
    nascto date not null , 
    id_turma int ,
    foreign key (id_turma) references turma(id)
);

CREATE table leciona(
    id_prof int not null, 
    id_turma int not null,
    foreign key (id_prof) references professor(id), 
    foreign key (id_turma) references turma(id)
);
