import { useState } from 'react';
import styles from './AddTaskForm.module.css';

const AddTaskForm = (props) => {

  const [newTaskText, setTaskText] = useState('');

  return (
    <div className={styles.form}>
      <input 
        type="text" 
        className={styles.input} 
        placeholder="Добавить новую задачу..."
        onChange={(elem) => setTaskText(elem.target.value)}
      />
      <button  className={styles.addButton} onClick={() => newTaskText.trim().length > 0 ? props.onAdd({text: newTaskText, completed:false }) : ''}>
        Добавить
      </button>

    </div>
  );
};

export default AddTaskForm;