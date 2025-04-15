import {useState} from "react";
import style from "./ContactForm.module.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  })
  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
     //    setFormData ({... formData, name: e.target.value});
        //}   else if (e.target.name === "email"){
        //    setFormData ({... formData, email: e.target.value});
        // }
        //O resultado a cima substitui o codigo comentado
  }
 
  return (
    <>
    <form className={style.form} action="">
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        className={style.input}
        value={formData.nome}
        onChange={HandleChange}
        required="true"
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        className={style.input}
        value={formData.email}
        onChange={HandleChange}
        required="true"

      />

      <textarea
        name="mensagem"
        placeholder="Mensagem"
        className={style.textarea}
        value={formData.textarea}
        onChange={HandleChange}
        required="true"
        
      />

      <button type="submit" className={style.button}>
        Enviar
      </button>
    </form>
    
    </>
  );
};
