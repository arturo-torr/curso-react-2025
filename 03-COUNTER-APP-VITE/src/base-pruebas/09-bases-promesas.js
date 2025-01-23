// Promesas
import {
  getHeroeById,
  getHeroesByOwner,
} from "./bases/08-bases-exportaciones.js";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const p1 = getHeroeById(2);
//     resolve(p1);
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("heroe", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);

      p1 ? resolve(p1) : reject("No se ha encontrado el héroe");
      //resolve(p1);
    }, 1000);
  });
};

getHeroeByIdAsync(3).then(console.log).catch(console.warn);
