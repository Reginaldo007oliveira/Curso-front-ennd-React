import React from 'react';
import { useCart } from '../../context/CartContext';

export const Product = ({ id, name }) => {
  const { addToCart } = useCart(); // Certifique-se de que addToCart está disponível no contexto

  return (
    <div>
      <h2>{id}</h2>
      <h3>{name}</h3>
      
      <button type="button" onClick={() => addToCart({ id, name })}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};