import db from "../db"



export class AtorRepository {

  getAll() {
    const stmt = db.prepare("SELECT * FROM actor");
    return stmt.all();
  }

  getById(id: number) {
    const stmt = db.prepare("SELECT * FROM actor WHERE actor_id = ?");
    return stmt.get(id);
  }

  create(id: number, firstName: string, lastName: string) {
    const stmt = db.prepare("INSERT INTO actor (actor_id, first_name, last_name, last_update) VALUES (?, ?, ?, CURRENT_TIMESTAMP)");
    const info = stmt.run(1000, firstName, lastName);
    return info.lastInsertRowid;
  }

  update(id: number, firstName: string, lastName: string) {
    const stmt = db.prepare("UPDATE actor SET first_name = ?, last_name = ? WHERE actor_id = ?");
    const info = stmt.run(firstName, lastName, id);
    return info.changes; 
  }

  delete(id: number) {
    const stmt = db.prepare("DELETE FROM actor WHERE actor_id = ?");
    const info = stmt.run(id);
    return info.changes;
  }



  getMoviesByActor(id: number)
  {

    const stmt = db.prepare("select f.film_id, f.title, f.release_year FROM film f JOIN film_actor fa On f.film_id = fa.film_id  WHERE fa.actor_id = ? ");
    return stmt.all(id);
  }

}

