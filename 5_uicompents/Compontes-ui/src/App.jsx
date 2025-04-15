import { useState } from 'react'
import './App.css'
import { Clock } from './components/relogio/Clock'
import { Modal } from './components//Modal/modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Clock />
    <hr />
    <h2><Modal/></h2>
    
    </>
  )
}

export default App
