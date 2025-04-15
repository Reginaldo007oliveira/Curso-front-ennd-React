import { useState } from 'react'
import './App.css'
import { Clock } from './components/relogio/Clock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Clock />
    </>
  )
}

export default App
