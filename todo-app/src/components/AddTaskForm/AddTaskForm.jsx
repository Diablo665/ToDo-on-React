import styles from './AddTaskForm.module.css';

const AddTaskForm = () => {
  return (
    <div className={styles.form}>
      <input 
        type="text" 
        className={styles.input} 
        placeholder="Добавить новую задачу..."
      />
      <button className={styles.addButton}>
        Добавить
      </button>
    </div>
  );
};

export default AddTaskForm;