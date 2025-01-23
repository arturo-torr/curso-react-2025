import { useState } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    // console.log(event);
    //setCounter(counter + 1);
    setCounter((counter) => counter + 1);
  };

  const handleSubstract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

// Se utiliza para requerir el tipo de las propiedades
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
