import React from "react";
//passar uma hero function para corrigir o problema do clique ()=>
export const Events = () => {
    const handleGreetings = (nome) =>{
        alert(`Olá ${nome}`);
    }
  return (
    <>
    

{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button  onClick={()=>alert("Clicado")}>Alerta</button>
{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button  onClick={()=> handleGreetings("João")}>Alert chamado da função</button>
    </>
  );
};
