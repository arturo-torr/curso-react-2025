const persona = {
  nombre: "Arturo",
  apellidos: "Torres",
  edad: 28,
  direccion: {
    calle: "Azucena",
    numero: 15,
    lat: 14.1322,
    lon: 34.92321,
  },
};

// console.table(persona);
console.log(persona);

const persona2 = { ...persona };
persona2.nombre = "Juan";

console.log(persona2.nombre);
console.log(persona.nombre);
