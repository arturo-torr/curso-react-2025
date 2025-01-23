// Templates Strings

const nombre = "Arturo";
const apellido = "Torres";

// const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = `
${nombre}
${apellido}
${1 + 1}
`;
console.log(nombreCompleto);

function getSaludo(nombre, apellido) {
  return `Hola ${nombre} ${apellido}`;
}

console.log(`Este es un texto: ${getSaludo(nombre, apellido)}`);
