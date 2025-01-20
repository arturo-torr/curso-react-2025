// Funciones

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => `Hola, ${nombre}`;

console.log(saludar("Arturo"));
console.log(saludar2("Juan"));

const getUser = () => ({
  uid: "ABC123",
  username: "arturo_63",
});

const user = getUser();
console.log(user);

function getUsuarioActivo(nombre) {
  return {
    uid: "ABC567",
    username: nombre,
  };
}

const getUsuarioActivo2 = (uid, nombre) => ({
  uid: uid,
  username: nombre,
});

const usuarioActivo = getUsuarioActivo2("ABC123", "Arturo");
const usuarioActivo2 = getUsuarioActivo2("DEF456", "Juan");
console.log(usuarioActivo);
console.log(usuarioActivo2);
