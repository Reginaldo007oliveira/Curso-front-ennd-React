import React from "react";
//passar uma hero function para corrigir o problema do clique ()=>
export const Events = () => {
  return (
    <>

{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button  onClick={()=>alert("Clicado")}>Alerta</button>
    </>
  );
};
