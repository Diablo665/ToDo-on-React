import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ tasks, onCheckboxChange, onDelete, onEdit }) => {
  return (
    <ul className={styles.list}>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onCheckboxChange={onCheckboxChange}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <div className={styles.noneTasks}>
          <p> Задачи отсутсвуют </p>
        </div>
      )}
    </ul>
  );
};

export default TodoList;
