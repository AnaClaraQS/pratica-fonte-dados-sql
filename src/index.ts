
import { AtorRepository } from "./DAL/repositories/AtorRepository";
import { FilmeRepository } from "./DAL/repositories/FilmeRepository";

const atorRepo = new AtorRepository();
const filmeRepo = new FilmeRepository();

console.log("=== Lista de atores ===");
console.log(atorRepo.getAll());

console.log("=== Lista de filmes ===");
console.log(filmeRepo.getAll());

console.log("=== Filmes de ato 190 ===");
console.log(atorRepo.getMoviesByActor(190));

console.log("=== Filmes de animação  ===");
console.log(filmeRepo.getAnimationMovies());

console.log("===Quantidade de filmes por categoria ===");
console.log(filmeRepo.getMoviesByCategory());