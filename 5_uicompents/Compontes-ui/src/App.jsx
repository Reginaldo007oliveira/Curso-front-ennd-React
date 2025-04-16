import React from "react";
import "./App.css";
import { Clock } from "./components/relogio/Clock";
import { Modal } from "./components//Modal/modal";
import { ContactForm } from "./components/Formularios/ContactForm/ContactForm";
import { Accordion } from "./components/Accordion/Accordion";
 
function App() {
  return (
    <>
      <Accordion />
      <hr />
      <Clock />
      <hr />
      <h2>
        <Modal />
      </h2>
      <hr />
      <h2>Formulário de Contato</h2>
      <ContactForm />
      <hr />
      <h2> Accordion </h2>
    </>
  );
}

export default App;
