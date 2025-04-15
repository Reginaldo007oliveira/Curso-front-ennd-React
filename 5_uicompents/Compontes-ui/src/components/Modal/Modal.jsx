import React from "react";
import styles from "./Modal.module.css";

export const Modal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* aqui abre o modeal */}
      <div className={styles.container}>
     
        {isOpen && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>Titulo do modal</h2>
              <p>Conteúdo do modal</p>
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
              >
                Fechar
              </button>
            </div>
            
          </div>
        )}

           {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
           <button className={styles.openButton} onClick={() => setIsOpen(true)}>
          abrir button
        </button>

      </div>
    </>
  );
};
