// Arrays

const coleccion = [1, 2, 3, 4];

// Es conveniente no usar push porque modifica el objeto literal
//coleccion.push(1);
//coleccion.push(2);

let coleccion2 = [...coleccion, 5];

const coleccion3 = coleccion2.map((x) => x * 2);
console.log(coleccion);
console.log(coleccion2);
console.log(coleccion3);
