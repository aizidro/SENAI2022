Criando uma consulta de uma tabela //Select * from tabela where id_vendedor 2
Select * from where nome like 'marcelo' // se vc não saber o nome inteiro da tabela so uma parte ele encontra com base no que vc pesquisou

Create view vw_vendas_gerais AS
SELECT v.id AS 'id da venda', ve.nome as 'nome do vendedor', c.nome as 'nome do cliente', v.data, v.valor
FROM venda v // especifica de onde vai pegar as informaçoes
JOIN vendedor ve ON v.id_vendedor = ve.id  JOIN liga uma tabela na outra ON coloca uma condião
WHERE v.id_vendedor IS NOT NULL AND V.id_cliente is not null 
ORDER BY v.data DESC ORDER BY ele vai ordenar as tabelas DESC colocar as tabelas em ordem decrescente  

ON Coloca uma condição se o id da tabela  for igual ao da tabela y 


CREATE VIEW vw_vendas_comissao AS
SELECT v.id AS 'id da venda', ve.nome as 'nome do vendedor' c.nome AS 'nome do cliente' , v.data