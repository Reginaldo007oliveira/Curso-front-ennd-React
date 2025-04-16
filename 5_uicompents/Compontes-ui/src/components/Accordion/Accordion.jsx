import { useState } from "react";
import styles from "./Accordion.module.css";

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const items = [
    {
      question: "Agora Vai,",
      answer:
        "consectetur adipisicing elit. Ipsa cum excepturi eveniet nemo, quod sapiente amet laudantium praesentium quaerat id tempora atque magni totam optio culpa. Et autem ducimus consectetur?"
    },

    {
      question: "bora bora",
      answer:
        "consectetur adipisicing elit. Ipsa cum excepturi eveniet nemo, quod sapiente amet laudantium praesentium quaerat id tempora atque magni totam optio culpa. Et autem ducimus consectetur?"
    },

    {
      question: "Lorem ipsum dolor sit amet,",
      answer:
        "consectetur adipisicing elit. Ipsa cum excepturi eveniet nemo, quod sapiente amet laudantium praesentium quaerat id tempora atque magni totam optio culpa. Et autem ducimus consectetur?"
    },
    {
      question: "Lorem ipsum dolor sit amet,",
      answer:
        "consectetur adipisicing elit. Ipsa cum excepturi eveniet nemo, quod sapiente amet laudantium praesentium quaerat id tempora atque magni totam optio culpa. Et autem ducimus consectetur?"
    },
    {
      question: "Lorem ipsum dolor sit amet,",
      answer:
        "consectetur adipisicing elit. Ipsa cum excepturi eveniet nemo, quod sapiente amet laudantium praesentium quaerat id tempora atque magni totam optio culpa. Et autem ducimus consectetur?"
    },
  ];

  return (
    <>
      <div className={styles.accordion}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${ activeIndex === index ? styles.open :"" }`}>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button className={styles.button}>{item.question}</button>

            {activeIndex === index && (
              <p className={styles.answer}> {item.answer} </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
