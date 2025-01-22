import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
    </>
  );
};

// Se utiliza para requerir el tipo de las propiedades
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
