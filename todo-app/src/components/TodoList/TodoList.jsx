import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

const TodoList = ({ tasks, onCheckboxChange }) => {
  return (
    <ul className={styles.list}>
      {tasks.map(task => (
        <TodoItem 
          key={task.id} 
          task={task} 
          onCheckboxChange={() => onCheckboxChange(task.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;