
import './App.css'
import { Cart } from './components/Component-cart/Cart'
import { Product } from './components/Component-cart/Product'
import {  CartProvider} from './context/CartContext'

function App() {
  

  return (
  
   <CartProvider>
   
    <Product id={1} name= "Produto 01"/>
    <Product id={2} name= "Produto 02"/>
     <Product id={3} name= "Produto 03"/>
     <Cart/>
   </CartProvider>
   
    
  )
}

export default App
