import React from "react";
import ReactDOM from "react-dom/client";

// Componentes funcionales son aquellos que están basados en funciones
function App() {
  return <h1>Hola Mundo!!</h1>;
}

// Renderiza en el DOM el componente
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
