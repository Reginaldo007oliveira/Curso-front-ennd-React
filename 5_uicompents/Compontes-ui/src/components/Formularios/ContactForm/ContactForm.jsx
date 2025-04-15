import {useState} from "react";
import style from "./ContactForm.module.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  })
  return (
    <>
    <form className={style.form} action="">
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        className={style.input}
        value={formData.nome}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        className={style.input}
        value={formData.email}
      />

      <textarea
        name="mensagem"
        placeholder="Mensagem"
        className={style.textarea}
        value={formData.textarea}
        
      />

      <button type="submit" className={style.button}>
        Enviar
      </button>
    </form>
    </>
  );
};
