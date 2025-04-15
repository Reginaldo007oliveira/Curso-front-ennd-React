import React, { useState } from "react";
import styles from "./TodoList.module.css";
//erro scroto
// import styles from "./TodoList.module.css"

//função do campó imput
export const TodoList = () => {
    const [task, setTask] = useState("")
    // console.log("task", task)

    //add task
    const [tasks, setTasks] = useState([])

    //função do botão
    const addTask = () => {
        //limpa dados do formulário
        if(task.trim() ==="") return;
        setTasks([...tasks, task])
        setTask("");
    }
    console.log("adiciona Task", tasks)
    
  return (
    <div className={styles.container}>
      <h2 className={styles.tile}> Lista de Tarefas</h2>
      <div className={styles.inputContainer}>
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          className={styles.input}
          value={task} // valor passado para o imput
          onChange={(e) => setTask(e.target.value)} //onChange quando eu teclar..  é o valor atual do campo de entrada.
        />
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button onClick={addTask} className={styles.button}>add</button>
      </div>
      <ul className={styles.TaskList}>
        <li className={styles.taskItem}>Item 1</li>
      </ul>
    </div>
  );
};
