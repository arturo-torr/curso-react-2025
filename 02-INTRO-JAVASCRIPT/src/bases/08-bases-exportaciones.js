// Import, export, funciones comunes
import heroes, { owners } from "./data/heroes.js";

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

const hero = getHeroeById(1);
// console.log(getHeroeById(2));
// console.log(getHeroesByOwner("Marvel"));
