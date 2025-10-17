import { useState } from 'react';
import styles from './TodoItem.module.css';
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import EditForm from '../EditForm/EditForm';


const TodoItem = ({ task, onCheckboxChange, onDelete, onEdit}) => {

  const itemClass = task.completed ? styles.completed : styles.item;

  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  return (
    <> 
    <div className={itemClass}>
      <input 
        type="checkbox" 
        className={styles.checkbox} 
        checked={task.completed}
        onChange={() => onCheckboxChange(task.id)}
      />
      <p className={styles.text}>{task.text}</p>

      <MdDeleteForever className={styles.deleteButton}onClick={() => onDelete(task.id)} />
      <CiEdit className={styles.editButton} onClick={() => setIsEditFormOpen(!isEditFormOpen)} />

    </div>

      {isEditFormOpen && <EditForm editId={task.id} onEdit={onEdit} />}

    </>
    
  );
};

export default TodoItem;