-- Selecionar todos os atores
SELECT * FROM actor;

-- Selecionar apenas nome e sobrenome
SELECT first_name, last_name FROM actor;

-- Selecionar com filtro
SELECT * FROM actor
WHERE last_name = 'Hanks';


-- Listar todos os filmes com os nomes dos atores
SELECT fa.film_id, a.first_name, a.last_name
FROM film_actor fa
INNER JOIN actor a ON fa.actor_id = a.actor_id;

--Contar quantas vendas cada produto teve
SELECT nome_produto, COUNT(*) AS total_vendas
FROM vendas
GROUP BY nome_produto;

--Somar a quantidade vendida de cada produto
SELECT nome_produto, SUM(quantidade) AS total_quantidade
FROM vendas
GROUP BY nome_produto;