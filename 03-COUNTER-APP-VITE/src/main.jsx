import React from "react";
import ReactDOM from "react-dom/client";
// import { HelloWorldApp } from "./HelloWorldApp";
// import { FirstApp } from "./FirstApp";
// Importación de estilos
import "./styles.css";
import { CounterApp } from "./CounterApp";

// Componentes funcionales son aquellos que están basados en funciones
// function App() {
//   return <h1>Hola Mundo!!</h1>;
// }

// Renderiza en el DOM el componente
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWorldApp />
    <FirstApp title="Hola" subTitle={123} /> */}
    <CounterApp value={123} />
  </React.StrictMode>
);
