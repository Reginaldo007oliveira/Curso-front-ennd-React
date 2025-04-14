import { useState, useEffect } from "react"

export const GitHubUser = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://api.github.com/users/lucianorp')
        .then(response => response.json()) // converte json para objeto
        .then(data => setData(data)) 
        .catch(error => console.error(error))
    },[]) // array sem depencencias
  
    return (
    <>
    <img src={data.avatar_url} alt="data.name" />
    <p>Nome: {data.name}</p>
    <p>BIO: {data.bio}</p>
    </>
  )
}
