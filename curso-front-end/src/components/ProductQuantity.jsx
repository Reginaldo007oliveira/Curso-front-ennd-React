import React, { useState } from 'react'

export const ProductQuantity = () => {

   const[product, setProduct] = useState({
    name: "Cadeira",
    quantity:1

   })
 
   const updateQuantity = () => {
    setProduct((prevProduct) =>({  //pega o objeto .. estado do produto anterior
        ...prevProduct, //preserva o objeto
        quantity: prevProduct.quantity + 1  //atualizar com quantity
    }))
   }


    return (
      <>
      <p>Nome do Produto: {product.name}</p>
      <p>Quantidade: {product.quantity}</p>

      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button  onClick={updateQuantity}>Almenta a quantidade do produto</button>
      
      </>
  )
}
