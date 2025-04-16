import { useState } from "react";
import styles from "./Accordion.module.css";

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const items = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Consectetur adipisicing elit. Ipsa cum excepturi eveniet nemo, quod sapiente amet laudantium praesentium quaerat id tempora atque magni totam optio culpa. Et autem ducimus consectetur?",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Consectetur adipisicing elit. Ipsa cum excepturi eveniet nemo, quod sapiente amet laudantium praesentium quaerat id tempora atque magni totam optio culpa. Et autem ducimus consectetur?",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Consectetur adipisicing elit. Ipsa cum excepturi eveniet nemo, quod sapiente amet laudantium praesentium quaerat id tempora atque magni totam optio culpa. Et autem ducimus consectetur?",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Consectetur adipisicing elit. Ipsa cum excepturi eveniet nemo, quod sapiente amet laudantium praesentium quaerat id tempora atque magni totam optio culpa. Et autem ducimus consectetur?",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Consectetur adipisicing elit. Ipsa cum excepturi eveniet nemo, quod sapiente amet laudantium praesentium quaerat id tempora atque magni totam optio culpa. Et autem ducimus consectetur?",
    },
  ];
  // se o elemento que for clicado for igual ele .. se ele estiver aberto ele fecha se naõ
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          //se estiver ativo adiciona a classe open ... activeIndex.. aquele elemento que foi clicado ou open
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className={`${styles.item} ${
            activeIndex === index ? styles.open : ""
          }`}
        >
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className={styles.button} onClick={() => handleToggle(index)}>
            {item.question}
          </button>

          {activeIndex === index && (
            <p className={styles.answer}>{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};