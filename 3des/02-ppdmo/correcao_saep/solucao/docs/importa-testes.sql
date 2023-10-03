use fabrica;

LOAD DATA INFILE 'D:/senai2022/3des/02-ppdmo/correcao_saep/dados/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/senai2022/3des/02-ppdmo/correcao_saep/dados/automoveis.csv'
INTO TABLE automoveis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/senai2022/3des/02-ppdmo/correcao_saep/dados/concessionarias.csv'
INTO TABLE concessionaria
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/senai2022/3des/02-ppdmo/correcao_saep/dados/alocacao.csv'
INTO TABLE alocacao
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

select * from alocacao group by area;