import styles from './TodoItem.module.css';

const TodoItem = ({ task, onCheckboxChange}) => {
  const itemClass = task.completed ? styles.completed : styles.item;
  
  return (
    <div className={itemClass}>
      <input 
        type="checkbox" 
        className={styles.checkbox} 
        checked={task.completed}
        onChange={onCheckboxChange}
      />
      <p className={styles.text}>{task.text}</p>
    </div>
  );
};

export default TodoItem;