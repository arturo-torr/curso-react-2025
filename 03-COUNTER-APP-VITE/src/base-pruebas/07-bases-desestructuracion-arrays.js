// Desestructuración de arrays

const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = personajes;
console.log(p3);
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const retornarArray = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornarArray();
console.log(letras, numeros);

const useState = (valor) => {
  return [
    valor,
    (nombre) => {
      console.log(`Hola ${nombre}`);
    },
  ];
};

const [nombre, setNombre] = useState("Goku");

console.log(nombre, setNombre);
setNombre(nombre);
