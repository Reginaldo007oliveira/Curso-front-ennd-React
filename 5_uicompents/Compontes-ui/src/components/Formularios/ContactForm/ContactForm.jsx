import { useState } from "react";
import style from "./ContactForm.module.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // pega o primeiro nome e mantem o valor dos outros campos
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //evita evento padrão. Reseta o comportamento de clicar e ja carregar
    console.log("Formulário enviado com sucesso!", formData); //setForm data
    alert("Mensagem Enviada com Sucesso");
    setFormData({ nome:"", email:"", mensagem:"" }); //limpa os campos
    
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          className={style.input}
          value={formData.nome}
          onChange={handleChange}
          required="true"
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          className={style.input}
          value={formData.email}
          onChange={handleChange}
          required="true"
        />

        <textarea
          name="mensagem"
          placeholder="Mensagem"
          className={style.textarea}
          value={formData.textarea}
          onChange={handleChange}
          required="true"
        />

        <button type="submit" className={style.button}>
          Enviar
        </button>
      </form>
    </>
  );
};
