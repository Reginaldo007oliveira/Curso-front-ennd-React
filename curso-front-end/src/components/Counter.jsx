// import React,{useState} from 'react';

// // import { Container } from './styles';

// function Counter() {
//     const [counter, setCounter] = useState(0);
//     const inscrement = () => {
//         setCounter((prevState)=> prevState)
//     }
//   return(
//     <>

//    </>
//   )

// }

// export default Counter função abrev;

import React, { useState, useEffect } from "react";

export const Counter = () => {
  const cssInlines = {
    color: "#000000",
    fontSize: "20px",
    backgroundColor: "#e8ef1a",
    padding: "15px",
    margin: "45px",
  };

  const caixa = {
    color: "#18a9f2",
    fontSize: "20px",
    backgroundColor: "#07170a",
    padding: "15px",
    margin: "45px",
  };

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((clique) => clique + 1);
  };

  const decrement = () => {
    setCounter((cliques) => cliques - 1);
  };

  return (
    <>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button style={cssInlines} onClick={decrement}>
        decrementa valor
      </button>
      <span style={caixa}>{counter}</span>

      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button style={cssInlines} onClick={increment}>
        incrementa valor
      </button>
    </>
  );
};
