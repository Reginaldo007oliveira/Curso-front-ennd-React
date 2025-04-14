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



// export default Counter função abreviada;


import React, {useState} from 'react'

export  const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter((clique)=> clique + 1)
    }

    const decrement = () => {
      setCounter((cliques)=> cliques - 1)
  }

  return (
    <>
   
    {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button onClick={increment}>incrementa valor</button> 
{counter}
{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button onClick={decrement}>incrementa valor</button>
    </>
  )
}
