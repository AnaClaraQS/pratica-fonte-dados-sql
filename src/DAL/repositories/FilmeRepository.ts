import db from "../db";

export class FilmeRepository {
  getAll() {
    const stmt = db.prepare("SELECT film_id, title, release_year FROM film");
    return stmt.all(); 
  }

  getById(id: number) {
    const stmt = db.prepare("SELECT * FROM film WHERE film_id = ?");
    return stmt.get(id);
  }

  create(title: string, description: string, releaseYear: number) {
    const stmt = db.prepare(`
      INSERT INTO film (title, description, release_year, language_id, last_update)
      VALUES (?, ?, ?, 1, CURRENT_TIMESTAMP)
    `);
    const info = stmt.run(title, description, releaseYear);
    return info.lastInsertRowid;
  }

  update(id: number, title: string, description: string) {
    const stmt = db.prepare(`
      UPDATE film
      SET title = ?, description = ?, last_update = CURRENT_TIMESTAMP
      WHERE film_id = ?
    `);
    const info = stmt.run(title, description, id);
    return info.changes;
  }

  delete(id: number) {
    const stmt = db.prepare("DELETE FROM film WHERE film_id = ?");
    const info = stmt.run(id);
    return info.changes;
  }

  getAnimationMovies() {
    const stmt = db.prepare(`
      SELECT f.film_id, f.title
      FROM film f
      JOIN film_category fc ON f.film_id = fc.film_id
      JOIN category c ON fc.category_id = c.category_id
      WHERE c.name = 'Animation'
    `);
    return stmt.all();
  }

  getMoviesByCategory() {
    const stmt = db.prepare(`
      SELECT c.name AS categoria, COUNT(*) AS total
      FROM film f
      JOIN film_category fc ON f.film_id = fc.film_id
      JOIN category c ON fc.category_id = c.category_id
      GROUP BY c.name
      ORDER BY total DESC
    `);
    return stmt.all();
  }
}
