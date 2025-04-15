import { useState } from 'react'
import './App.css'
import { Clock } from './components/relogio/Clock'
import { Modal } from './components//Modal/modal'
import { ContactForm } from './components/Formularios/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Clock />
    <hr />
    <h2><Modal/></h2>
    <hr />
    <h2>Formulário de Contato</h2>
    <ContactForm />
    
    </>
  )
}

export default App
