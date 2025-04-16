import { useState } from "react";
import styles from "./Accordion.module.css";

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const items = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Consectetur adipisicing elit. Ipsa cum excepturi eveniet nemo, quod sapiente amet laudantium praesentium quaerat id tempora atque magni totam optio culpa. Et autem ducimus consectetur?"
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Consectetur adipisicing elit. Ipsa cum excepturi eveniet nemo, quod sapiente amet laudantium praesentium quaerat id tempora atque magni totam optio culpa. Et autem ducimus consectetur?"
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Consectetur adipisicing elit. Ipsa cum excepturi eveniet nemo, quod sapiente amet laudantium praesentium quaerat id tempora atque magni totam optio culpa. Et autem ducimus consectetur?"
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Consectetur adipisicing elit. Ipsa cum excepturi eveniet nemo, quod sapiente amet laudantium praesentium quaerat id tempora atque magni totam optio culpa. Et autem ducimus consectetur?"
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Consectetur adipisicing elit. Ipsa cum excepturi eveniet nemo, quod sapiente amet laudantium praesentium quaerat id tempora atque magni totam optio culpa. Et autem ducimus consectetur?"
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${activeIndex === index ? styles.open : ""}`}
        >
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