import { useState, useEffect } from "react"

export const Clock = () => {
    // const [agora, setAgora] = useState(new Date().toLocaleDateString());
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalo = setInterval(() =>{
             setTime(new Date().toLocaleTimeString()) //setTime a cada passada de intervalo .. permanece time se nada ocorrer
        }, 3000) //atualiza a cada 3 segundos
        return () => clearInterval(intervalo) //limpa a memoria
    }, []) 

  return (
<>
  {/* <h2> Hora Atual: {relogio}</h2> */}
  <h2> Hora:{time}</h2>
  </>
  )
}
