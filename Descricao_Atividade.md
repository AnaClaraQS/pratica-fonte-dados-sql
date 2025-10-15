
=================================================================================
                                PRÁTICA FONTE DE DADOS SQL
=================================================================================
Instalar biblioteca better-sql3 com suporte a typescript
npm install --save-dev @types/better-sqlite3

npm install better-sqlite3

=================================================================================

ATIVIDADE Recuperação e manipulação de dados em bases sql
-utilizar a camada de repositórios para resolver as questões;
-criar novos repositórios na medida do necessário.
-não precisa criar a camada de serviços para essa atividade
-seguir como exemplo o AtorRepository.ts para criar os outros repositórios.
-Os códgos SQL podem ser modificados conforme a necessidade.
-estrutura da base de dados foi criada a partir de https://github.com/bradleygrant/sakila-sqlite3/blob/main/source/sqlite-sakila-schema.sql  (a consulta pode ser necessária para inserir corretamente novos dados)
-Verificar o arquivo 'Exemplos de SQL básicos em SQLite.md"

1) Listar todos os filmes (id, nome, título do filme, ano).
2) Listar todos os atores (id e nome completo).
3) Simular o CRUD de filmes.
4) Simular o CRUD de atores.
5) Listar o nome de todos os filmes do Ator de código 190.
6) Listar o nome de todos os flmes de animação.
7) Apresentar a quantidade de filmes de cada categoria
