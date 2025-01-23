// const newMessage = { message: "Hola Mundo", title: "Arturo" };
//const saludar = (nombre) => `Hola ${nombre}`;
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const FirstApp = ({ title, subTitle, name }) => {
  return (
    // <> es Sinónimo de fragmento, no añade nada al HTML
    <>
      <h2>{title}</h2>
      <h3>{name}</h3>
      <p>{subTitle} </p>
    </>
  );
};

// Se utiliza para requerir el tipo de las propiedades
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
};

// Propiedad por defecto, para asignar valores por defecto
// FirstApp.defaultProps = {
//   title: "No hay titulo",
//   subtitle: "No hay subtitulo",
//   name: "Arturo Torres",
// };
