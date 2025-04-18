import React from "react";
import { useCart } from "../../context/CartContext";

export const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Certifique-se de que removeFromCart está disponível no contexto
  
  return (
    <div>
      <h2>Carrinho</h2>
      
      {cart.length === 0 ?  <p>Seu carrinho está vazio</p> :(
       
       cart.map(item => (
          <div key={item.id}>
            <span>{item.name}</span>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </div>
        ))
       
       )}
       
    </div>
  );
};