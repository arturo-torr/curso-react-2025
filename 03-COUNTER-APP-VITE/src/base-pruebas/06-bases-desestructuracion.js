// Desestructuracion Objetos
const persona = {
  nombre: "Arturo",
  edad: 28,
  clave: "Developer",
};

// const { nombre, edad } = persona;

const useContext = ({ clave, nombre, edad, rango = "Capitan" }) => {
  //console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 12.324234,
      lng: 12.3425,
    },
  };
};

const {
  nombreClave,
  anios,
  // Extrae en constantes la latitud y longitud
  latlng: { lat, lng },
} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);
