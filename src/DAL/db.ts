import path from "path";
import Database from "better-sqlite3";

const dbPath = path.join(__dirname, "../../database/sakila_master.db");

const db = new Database(dbPath, { verbose: console.log } );

export default db;

/* RESUMO do better-sql3

-Uma instância única do banco: compartilhe entre os repositórios.
-Use prepare + placeholders sempre que possível (segurança, pois evita sql injection, + performance).
-.get() → retorna 1 registro, .all() → retorna array, .iterate() → iteração.
-.run() → para queries que não retornam linhas.
-Transações → se for inserir/atualizar múltiplos registros de uma vez.
-verbose → opcional, útil para debug (verbose: console.log).

*/
